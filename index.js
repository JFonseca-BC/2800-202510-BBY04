require("dotenv").config();

const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const bcrypt = require("bcrypt");
const path = require("path");
const fs = require("fs");
const Joi = require("joi");


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
    
    // Home Route (Restricted)
    app.get("/main", (req, res) => {
        if (!req.session.user) {
            return res.redirect("/login");
        } else {
            fs.readFile(path.join(__dirname, 'app', 'html', 'main.html'), 'utf8', (err, data) => {
                const htmlContent = data.replace('{{user}}', req.session.user.name); // Use user.name from session
                res.send(htmlContent);
            });
        }
    });
    

 app.get("/reminder", (req, res) => {
        res.sendFile(path.join(__dirname, "app", "html", "reminder.html"));
    });
    
    
    // SDS Route
    app.get("/sds", async (req, res) => {
        if (!req.session.user) {
            return res.redirect("/login");
        }
        
        const chemicalNames = await chemicalCollection.find({}).project({substance_name:1, _id:1}).toArray();
        let letterGroups = createLetterGroups(chemicalNames.map((c) => c.substance_name));
        res.render("sds", {chemicalNames:chemicalNames, letterGroups:letterGroups});
    });

    app.get("/sds/:substance_name", async (req, res) => {
        if (!req.session.user) {
            return res.redirect("/login");
        }

        var substance_name = req.params.substance_name;

        const schema = Joi.string().max(30).required();
        const validationResult = schema.validate(substance_name);
        if(validationResult.error != null)
        {
            res.redirect("/sds");
            return;
        }

        const chemicalJSON = await chemicalCollection.find({substance_name: substance_name}).toArray();
        if(!chemicalJSON[0])
        {
            res.redirect("/sds");
            return;
        }

        res.render("sdsTemplate", {chemicalJSON: chemicalJSON[0]});
    });

    app.post("/sdsSearch", async(req, res) => {
        let searchInput = req.body.search;

        const schema = Joi.string().max(30).required();
        const validationResult = schema.validate(searchInput);

        if(validationResult.error != null)
        {
            return;
        }

        const chemicals = await chemicalCollection.find({substance_name: {$regex: searchInput, $options: "i"}}).toArray();
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

            // Save to database
            const appliancesCollection = database.collection("appliances");
            await appliancesCollection.insertOne({
                name,
                lastServiceDate,
                type,
                userEmail,
                createdAt: new Date()
            });

            res.status(201).json({ success: true });
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

/**
 * Returns an array of the different letter groupings of chemicals, based on their first 
 * letter.
 * @param {Array<String>} chemicalNames represents an array of all chemical names to be 
 *                                      listed out on the page.
 * @returns a String array of letters sorted in alphabetical order that represents the 
 *          different letter groups of chemicals.
 */
function createLetterGroups(chemicalNames)
{
    let nonUniqueFirstChars = chemicalNames.map((name) => name.toUpperCase().substring(0, 1));

    let uniqueAlpha = [];
    nonUniqueFirstChars.forEach((letter) => {
        if(!uniqueAlpha.includes(letter))
        {
            uniqueAlpha.push(letter);
        }
    });

    let letterGroups = uniqueAlpha.sort();

    return letterGroups;
}