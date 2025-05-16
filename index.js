require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");

const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const bcrypt = require("bcrypt");
const path = require("path");
const fs = require("fs");
const Joi = require("joi");
const { ObjectId } = require('mongodb');

const ai = new GoogleGenAI({apiKey: process.env.GOOGLE_API_KEY });

const app = express();
const port = 8000;
const saltRounds = 12;

// Connect to MongoDB Properly
const connectDB = require("./databaseConnection");

async function setupServer() {
    const database = await connectDB();
    const userCollection = database.collection("users");
    const chemicalCollection = database.collection("chemicals");

    // Middleware Setup 
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));


    const mongoStore = MongoStore.create({
        mongoUrl: `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/sessions`,
        crypto: { secret: process.env.MONGODB_SESSION_SECRET }
    });

    app.use(session({
        secret: process.env.NODE_SESSION_SECRET,
        store: mongoStore,
        saveUninitialized: false,
        resave: true
    }));

    // Serve Static Files
    app.use("/images", express.static(path.join(__dirname, "images")));
    app.use("/public", express.static(path.join(__dirname, "public")));
    app.use("/images", express.static(path.join(__dirname, "images")));
    app.use("/app", express.static(path.join(__dirname, "app")));

    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "app", "views"));

    // Root Route
    app.get("/", (req, res) => {
        if (!req.session.user) {
            return res.redirect("/login");
        }
        res.redirect("/main");
    });

    // Register Route
    app.post("/register", async (req, res) => {
        console.log("Received registration request:", req.body);

        const { name, email, password } = req.body;
        if (!name || !email || !password) return res.status(400).send("Missing required fields.");

        try {
            const existingUser = await userCollection.findOne({ email });
            if (existingUser) return res.status(400).send("Email already registered.");

            const hashedPassword = await bcrypt.hash(password, saltRounds);
            await userCollection.insertOne({ name, email, password: hashedPassword });

            req.session.user = { name, email };
            console.log("User registered successfully:", name, email);
            res.redirect("/main");
        } catch (error) {
            console.error("Registration error:", error);
            res.status(500).send("Error registering user.");
        }
    });

    app.get("/login", (req, res) => {
        res.sendFile(path.join(__dirname, "app", "html", "login.html"));
    });


    // Login Route with MongoDB Authentication
    app.post("/login", async (req, res) => {
        const { email, password } = req.body;

        try {
            const user = await userCollection.findOne({ email });
            if (!user) return res.status(400).send("Invalid credentials. Try again.");

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(400).send("Invalid credentials. Try again.");

            req.session.user = { name: user.name, email: user.email }; // Store name from DB in session
            res.redirect("/main");
        } catch (error) {
            res.status(500).send("Server error");
        }
    });

    // Logout Route
    app.post("/logout", (req, res) => {
        req.session.destroy(err => {
            if (err) {
                console.error("Error destroying session:", err);
                return res.status(500).send("Error logging out");
            }
            res.redirect("/login");
        });
    });

    // Home Route (Restricted)
    app.get("/reminders", (req, res) => {
        if (!req.session.user) {
            return res.redirect("/login");
        } else {
            fs.readFile(path.join(__dirname, 'app', 'html', 'reminders.html'), 'utf8', (err, data) => {
                const htmlContent = data.replace('{{user}}', req.session.user.name); // Use user.name from session
                res.send(htmlContent);
            });
        }
    });


    app.get("/main", (req, res) => {
        res.sendFile(path.join(__dirname, "app", "html", "main.html"));
    });


    // SDS Route
    app.get("/sds", async (req, res) => {
        if (!req.session.user) {
            return res.redirect("/login");
        }

        const chemicalNames = await chemicalCollection.find({}).project({ substance_name: 1, _id: 1 }).toArray();
        let letterGroups = createLetterGroups(chemicalNames.map((c) => c.substance_name));
        res.render("sds", { chemicalNames: chemicalNames, letterGroups: letterGroups });
    });

    app.get("/sds/:substance_name", async (req, res) => {
        if (!req.session.user) {
            return res.redirect("/login");
        }

        var substance_name = req.params.substance_name;

        const schema = Joi.string().max(30).required();
        const validationResult = schema.validate(substance_name);
        if (validationResult.error != null) {
            res.redirect("/sds");
            return;
        }

        const chemicalJSON = await chemicalCollection.find({ substance_name: substance_name }).toArray();
        if (!chemicalJSON[0]) {
            res.redirect("/sds");
            return;
        }

        res.render("sdsTemplate", { chemicalJSON: chemicalJSON[0] });
    });

    app.post("/sdsSearch", async (req, res) => {
        let searchInput = req.body.search;

        const schema = Joi.string().max(30).required();
        const validationResult = schema.validate(searchInput);

        if (validationResult.error != null) {
            return;
        }

        const chemicals = await chemicalCollection.find({ substance_name: { $regex: searchInput, $options: "i" } }).toArray();
        res.json(chemicals);
    });

    // API endpoint to get current user
    app.get("/api/user", (req, res) => {
        if (!req.session.user) {
            return res.status(401).json({ error: "Not authenticated" });
        }
        res.json({ email: req.session.user.email });
    });

    // API endpoint to save appliance
    app.post("/api/appliances", async (req, res) => {
        if (!req.session.user) {
            return res.status(401).json({ error: "Not authenticated" });
        }

        try {
            const { name, lastServiceDate, type, userEmail } = req.body;

                // Validate input
                if (!name || !lastServiceDate || !type || !userEmail) {
                    return res.status(400).json({ error: "Missing required fields" });
                }

                const appliancesCollection = database.collection("appliances");

                // Save to database
                const result = await appliancesCollection.insertOne({
                name,
                lastServiceDate,
                type,
                userEmail,
                createdAt: new Date()
            });

            // Return the inserted ID to the client
            res.status(201).json({ 
                success: true,
                insertedId: result.insertedId
            });
        
        } catch (error) {
            console.error("Error saving appliance:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });

    // API endpoint to get appliances for current user
    app.get("/api/appliances", async (req, res) => {
        if (!req.session.user) {
            return res.status(401).json({ error: "Not authenticated" });
        }

        try {
            const appliancesCollection = database.collection("appliances");
            const appliances = await appliancesCollection.find({
                userEmail: req.session.user.email
            }).sort({ createdAt: -1 }).toArray();

            res.json(appliances);
        } catch (error) {
            console.error("Error getting appliances:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });

    // API endpoint to get appliance count for current user
    app.get("/api/appliances/count", async (req, res) => {
        if (!req.session.user) {
            return res.status(401).json({ error: "Not authenticated" });
        }

        try {
            const appliancesCollection = database.collection("appliances");
            const count = await appliancesCollection.countDocuments({
                userEmail: req.session.user.email
            });

            res.json({ count });
        } catch (error) {
            console.error("Error getting appliance count:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });

    // API endpoint to delete an appliance
    app.delete("/api/appliances/:id", async (req, res) => {
        if (!req.session.user) {
            return res.status(401).json({ error: "Not authenticated" });
        }

        try {
            const { id } = req.params;

            if (!ObjectId.isValid(id)) {
                return res.status(400).json({ error: "Invalid appliance ID" });
            }

            const appliancesCollection = database.collection("appliances");
            const result = await appliancesCollection.deleteOne({
                _id: new ObjectId(id),
                userEmail: req.session.user.email
            });

            if (result.deletedCount === 0) {
                return res.status(404).json({ error: "Appliance not found" });
            }

            res.json({ success: true });
        } catch (error) {
            console.error("Error deleting appliance:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });

    // API endpoint to update an appliance's service date
    app.put("/api/appliances/:id", async (req, res) => {
        if (!req.session.user) {
            return res.status(401).json({ error: "Not authenticated" });
        }

        try {
            const { id } = req.params;

            if (!ObjectId.isValid(id)) {
                return res.status(400).json({ error: "Invalid appliance ID" });
            }

            const currentDate = new Date();
            const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;

            const appliancesCollection = database.collection("appliances");
            const result = await appliancesCollection.updateOne(
                {
                    _id: new ObjectId(id),
                    userEmail: req.session.user.email
                },
                {
                    $set: { lastServiceDate: formattedDate }
                }
            );

            if (result.modifiedCount === 0) {
                return res.status(404).json({ error: "Appliance not found or not updated" });
            }

            res.json({ success: true, lastServiceDate: formattedDate });
        } catch (error) {
            console.error("Error updating appliance:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });

    const axios = require("axios");

    app.post("/contacts/search", async (req, res) => {
        if (!req.session.user) return res.redirect("/login");

        const { lat, lon, issue } = req.body;

        const schema = Joi.object({
            lat: Joi.number().required(),
            lon: Joi.number().required(),
            issue: Joi.string().min(2).max(100).required()
        });

        const { error } = schema.validate({ lat, lon, issue });
        if (error) {
            console.error("Validation error:", error.details);
            return res.render("contacts", { handymen: [] });
        }

        try {
            const yelpResponse = await axios.get("https://api.yelp.com/v3/businesses/search", {
                headers: {
                    Authorization: `Bearer ${process.env.YELP_API_KEY}`
                },
                params: {
                    term: issue,
                    latitude: lat,
                    longitude: lon,
                    limit: 10,
                    radius: 10000 // in meters (10 km)
                }
            });

            const businesses = yelpResponse.data.businesses.map(biz => ({
                name: biz.name,
                phone: biz.phone || "N/A",
                rating: biz.rating,
                address: biz.location.display_address.join(", "),
                category: biz.categories[0]?.title || "Unknown",
                lat: biz.coordinates.latitude,
                lon: biz.coordinates.longitude
            }));

            res.render("contacts", { handymen: businesses });
        } catch (err) {
            console.error("Yelp API error:", err.message);
            res.render("contacts", { handymen: [] });
        }
    });
    app.get("/contacts", (req, res) => {
        if (!req.session.user) return res.redirect("/login");
        res.render("contacts", { handymen: undefined });
    });



    app.get("/vestabot", async (req, res) => {
        res.sendFile(path.join(__dirname, "app", "html", "vestabot.html"));
    });

    app.post("/vestabotChat", async (req, res) => {
        let outputText = await chat(req.body.input);
        res.send(outputText);
    });

    app.get("*dummy", (req, res) => {
        res.status(404);
        res.send("Page not found - 404");
    });

    // Start Server
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}

setupServer();

async function chat(input) {
    let initialPrompt = `
SYSTEM PROMPT — DO NOT IGNORE
DO NOT USE MARKDOWN.

You are Vesta, a friendly and practical home maintenance assistant.

Your job is to help homeowners with clear, simple advice.

Rules:
- Respond in plain text only. Do not use Markdown, HTML, or any formatting.
- Keep responses short: no more than 3–6 sentences.
- If the question depends on the user’s home type (e.g., house vs apartment), ask before answering.
- If the question is general and applies to any home type, answer directly.
- Be direct, helpful, and easy to understand. Avoid technical jargon unless asked.

Always stay in character as Vesta. These rules apply to every message.`;

    let history = [
        {
            role: "user",
            parts:  "What do I need to keep track of in my house?"
        },
        {
            role: "model",
            parts:  "Before I can answer that question I'll need a more information:\n - What type of house do you live in (ex. apartment, house)?"
        }
    ];
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: input,
        config: {
            systemInstruction: initialPrompt,
            maxOutputTokens: 500,
            temperature: 0.1
        },
        history: history
    });
    return response.text;
}

/**
 * Returns an array of the different letter groupings of chemicals, based on their first 
 * letter.
 * @param {Array<String>} chemicalNames represents an array of all chemical names to be 
 *                                      listed out on the page.
 * @returns a String array of letters sorted in alphabetical order that represents the 
 *          different letter groups of chemicals.
 */
function createLetterGroups(chemicalNames) {
    let nonUniqueFirstChars = chemicalNames.map((name) => name.toUpperCase().substring(0, 1));

    let uniqueAlpha = [];
    nonUniqueFirstChars.forEach((letter) => {
        if (!uniqueAlpha.includes(letter)) {
            uniqueAlpha.push(letter);
        }
    });

    let letterGroups = uniqueAlpha.sort();

    return letterGroups;
}