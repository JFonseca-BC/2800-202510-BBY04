// Load environment variables from .env file
require("dotenv").config();

// Import required modules
const { GoogleGenAI } = require("@google/genai");
const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const bcrypt = require("bcrypt");
const path = require("path");
const fs = require("fs");
const Joi = require("joi");
const { ObjectId } = require("mongodb");
const axios = require("axios");

// Initialize Google Gemini AI with API key
const ai = new GoogleGenAI({apiKey: process.env.GOOGLE_API_KEY });

// Initialize Express app and configuration
const app = express();
const port = 8000;
const saltRounds = 12;

// MongoDB connection setup
const connectDB = require("./databaseConnection");

/**
 * Gets the specified MongoDB collection from the connect database.
 * 
 * @param {string} collectionName represents the name of the collection to retrieve
 * @returns a Promise that resolves to the MongoDB collection object
 */
async function getCollection(collectionName)
{
    const database = await connectDB();
    return database.collection(collectionName);
}

/**
 * Redirects an authenticated user to the main page.
 * 
 * @param {Object} req represents express request object
 * @param {Object} res represents express response object
 */
function redirectMain(req, res) {
    res.redirect("/main");
}

/**
 * Handles user registration by validating input data, checking for existing users,
 * hashing the password securely, storing the new user in the database, and
 * initiating a user session upon successful registration.
 * 
 * @param {Object} req represents the express request object containing registration data
 * @param {Object} res represents the express response object used to send responses to the client
 */
async function registerUser(req, res) {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).send("Missing required fields.");
    
    const userCollection = await getCollection("users");

    try {
        const existingUser = await userCollection.findOne({ email });
        if (existingUser) return res.status(400).send("Email already registered.");

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        await userCollection.insertOne({ name, email, password: hashedPassword });

        req.session.user = { name, email };
        res.redirect("/main");
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).send("Error registering user.");
    }
}

/**
 * Sends the login page HTML file to the client.
 * 
 * @param {Object} req represents the express request object
 * @param {Object} res represents the express response object used to send the login page
 */
function loadLoginPage(req, res) {
    res.sendFile(path.join(__dirname, "app", "html", "login.html"));
}

/**
 * Authenticates a user by verifying credentials and generating a session or token.
 * 
 * @param {Object} req represents express request object containing login credentials
 * @param {Object} res represents express response object used for sending a response
 */
async function loginUser(req, res) {
    const { email, password } = req.body;

    const userCollection = await getCollection("users");
    
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
}

/**
 * Logs out the current user by destroying their session and redirects them to the login page.
 * 
 * @param {Object} req represents the express request object containing session data
 * @param {Object} res represents the express response object used to send the redirect response
 */
function logoutUser(req, res) {
    req.session.destroy(err => {
        if (err) {
            console.error("Error destroying session:", err);
            return res.status(500).send("Error logging out");
        }
        res.redirect("/login");
    });
}

/**
 * Loads and sends the reminders page HTML to the client, replacing
 * a placeholder with the logged-in user's name from the session.
 * 
 * @param {Object} req represents the express request object containing session data
 * @param {Object} res represents the express response object used to send the reminders page
 */
function loadRemindersPage(req, res) {
    fs.readFile(path.join(__dirname, 'app', 'html', 'reminders.html'), 'utf8', (err, data) => {
        const htmlContent = data.replace('{{user}}', req.session.user.name); // Use user.name from session
        res.send(htmlContent);
    });
}

/**
 * Sends the main page HTML file to the client.
 * 
 * @param {Object} req represents the express request object
 * @param {Object} res represents the express response object used to send the main page
 */
function loadMainPage(req, res) {
    res.sendFile(path.join(__dirname, "app", "html", "main.html"));
}

/**
 * Loads the list of chemical substances from the database, groups them by their first letter,
 * and renders the SDS listing page with this grouped data.
 * 
 * @param {Object} req represents the express request object
 * @param {Object} res represents the express response object used to render the SDS links page
 */
async function loadSDSLinksPage(req, res) {
    const chemicalCollection = await getCollection("chemicals");
    const chemicalNames = await chemicalCollection.find({}).project({ substance_name: 1, _id: 1 }).toArray();

    // Groups chemical names by their first letter for navigation
    const letterGroups = createLetterGroups(chemicalNames.map((c) => c.substance_name)); 

    res.render("sds", { chemicalNames: chemicalNames, letterGroups: letterGroups });
}

/**
 * Loads and renders the Safety Data Sheet (SDS) page for a specific chemical substance.
 * Validates the substance name from the request parameters before querying the database.
 * Redirects to the SDS listing page if validation fails or the substance is not found.
 * 
 * @param {Object} req represents the express request object containing route parameters
 * @param {Object} res represents the express response object used to render the SDS detail page or redirect
 */
async function loadSDSPage(req, res) {
    var substance_name = req.params.substance_name;

    const schema = Joi.string().max(50).required();
    const validationResult = schema.validate(substance_name);
    if (validationResult.error != null) {
        res.redirect("/sds");
        return;
    }

    const chemicalCollection = await getCollection("chemicals");
    const chemicalJSON = await chemicalCollection.find({ substance_name: substance_name }).toArray();
    if (!chemicalJSON[0]) {
        res.redirect("/sds");
        return;
    }

    res.render("sdsTemplate", { chemicalJSON: chemicalJSON[0] });
}


/**
 * Searches the chemicals collection in the database for substances matching the search input.
 * Validates the search input before querying and returns the matching chemicals as JSON.
 * 
 * @param {Object} req represents the express request object containing the search input in the body
 * @param {Object} res represents the express response object used to send the JSON search results
 */
async function searchChemicalsCollection(req, res) {
    const searchInput = req.body.search;

    const schema = Joi.string().max(50).required();
    const validationResult = schema.validate(searchInput);

    if (validationResult.error != null) {
        return;
    }

    const chemicalCollection = await getCollection("chemicals");
    const chemicals = await chemicalCollection.find({ substance_name: { $regex: searchInput, $options: "i" } }).toArray();
    res.json(chemicals);
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
    const nonUniqueFirstChars = chemicalNames.map((name) => name.toUpperCase().substring(0, 1));

    var uniqueAlpha = [];
    nonUniqueFirstChars.forEach((letter) => {
        if (!uniqueAlpha.includes(letter)) {
            uniqueAlpha.push(letter);
        }
    });

    const letterGroups = uniqueAlpha.sort();

    return letterGroups;
}

/**
 * Sends the email of the currently logged-in user as a JSON response.
 * 
 * @param {Object} req represents the express request object containing the user session
 * @param {Object} res represents the express response object used to send the JSON response
 */
function getUserEmailJSON(req, res) {
    res.json({ email: req.session.user.email });
}

/**
 * Saves a new appliance document to the database for the logged-in user.
 * Validates input fields, inserts the appliance record with a creation timestamp,
 * and returns the inserted document's ID as a JSON response.
 * 
 * @param {Object} req represents the express request object containing appliance data in the body
 * @param {Object} res represents the express response object used to send success or error responses
 */
async function saveAppliance(req, res) {
    try {
        const { name, lastServiceDate, type, userEmail } = req.body;

            // Validate input
            if (!name || !lastServiceDate || !type || !userEmail) {
                return res.status(400).json({ error: "Missing required fields" });
            }

            const appliancesCollection = await getCollection("appliances");

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
}

/**
 * Retrieves all appliances associated with the currently logged-in user,
 * sorted by creation date in descending order, and sends them as a JSON response.
 * 
 * @param {Object} req represents the express request object containing the user session
 * @param {Object} res represents the express response object used to send the JSON response
 */
async function getAppliances(req, res) {
    try {
        const appliancesCollection = await getCollection("appliances");
        const appliances = await appliancesCollection.find({
            userEmail: req.session.user.email
        }).sort({ createdAt: -1 }).toArray();

        res.json(appliances);
    } catch (error) {
        console.error("Error getting appliances:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

/**
 * Retrieves the count of appliances belonging to the currently logged-in user
 * and sends the count as a JSON response.
 * 
 * @param {Object} req represents the express request object containing the user session
 * @param {Object} res represents the express response object used to send the JSON response
 */
async function getApplianceCount(req, res) {
    try {
        const appliancesCollection = await getCollection("appliances");
        const count = await appliancesCollection.countDocuments({
            userEmail: req.session.user.email
        });

        res.json({ count });
    } catch (error) {
        console.error("Error getting appliance count:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

/**
 * Deletes an appliance by its ID for the currently logged-in user.
 * Validates the appliance ID, performs the deletion if found, 
 * and sends a success or error JSON response.
 * 
 * @param {Object} req represents the express request object containing the appliance ID parameter and user session
 * @param {Object} res represents the express response object used to send success or error responses
 */
async function deleteAppliance(req, res) {
    try {
        const { id } = req.params;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid appliance ID" });
        }

        const appliancesCollection = await getCollection("appliances");
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
}

/**
 * Updates the last service date of a specified appliance to the current date
 * for the logged-in user, identified by appliance ID.
 * Validates the ID, performs the update, and returns success or error JSON response.
 * 
 * @param {Object} req represents the express request object containing the appliance ID parameter and user session
 * @param {Object} res represents the express response object used to send success or error responses
 */
async function updateLastServiceDate(req, res) {
    try {
        const { id } = req.params;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid appliance ID" });
        }

        /*
         * Get current date and format it as 'YYYY-MM-DD'
         * Note: JavaScript's getMonth() returns 0–11, so we add 1 to get the calendar month
         * padStart(2, '0') ensures month and day are always 2 digits (eg. '04' instead of '4')
         */
        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;

        const appliancesCollection = await getCollection("appliances");
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
}

/**
 * Retrieves a list of handyman contacts near the specified location and issue
 * by querying the Yelp API. Validates input coordinates and issue description,
 * formats the response, and renders the contacts page with the results.
 * 
 * @param {Object} req represents the express request object containing latitude, longitude, and issue in the body
 * @param {Object} res represents the express response object used to render the contacts page with results or empty list on error
 */
async function getContacts(req, res) {
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

        /* 
         * Extract relevant business data from Yelp API response
         * Mapping each business to a simplified object for easier use in the frontend
         * Keeps only name, address, phone, and rating properties 
         */
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
}

/**
 * Renders the contacts page with no initial handyman data.
 * 
 * @param {Object} req represents the express request object
 * @param {Object} res represents the express response object used to render the contacts page
 */
function loadContactsPage(req, res) {
    res.render("contacts", { handymen: undefined });
}


/**
 * Sends the Vestabot chatbot HTML page to the client.
 * 
 * @param {Object} req represents the express request object
 * @param {Object} res represents the express response object used to send the Vestabot HTML file
 */
function loadVestabotPage(req, res) {
    res.sendFile(path.join(__dirname, "app", "html", "vestabot.html"));
}

/**
 * Middleware to verify if a user is authenticated by checking the session.
 * Redirects to login page if user is not authenticated; otherwise proceeds to next middleware.
 * 
 * @param {Object} req represents the express request object containing session info
 * @param {Object} res represents the express response object used for redirection
 * @param {Function} next callback to pass control to the next middleware
 */
function userAuthentication(req, res, next)
{
    if (!req.session.user) {
        res.redirect("/login");
        return ;
    }
    else
    {
        next();
    }
}

/**
 * Handles sending a chat message to the Google Gemini AI model and returns the AI response.
 * Maintains chat history in the user session for context in ongoing conversations.
 * 
 * @param {Object} req represents the express request object containing user input in req.body.input
 * @param {Object} res represents the express response object used to send the AI-generated response text
 */
async function sendVestaChat(req, res) {
    const initialPrompt = fs.readFileSync(path.join(__dirname, "app", "prompts", "initial-prompt.txt"), "utf-8");
    const vestaChat = await ai.chats.create({
        model: "gemini-2.0-flash",
        config: {
            systemInstruction: initialPrompt,
            maxOutputTokens: 500,
            temperature: 0.1
        },
        history: req.session.vestaChatHistory
    });

    const response = await vestaChat.sendMessage({
        message: req.body.input
    });

    req.session.vestaChatHistory = vestaChat.getHistory();

    res.send(response.text);
}

/**
 * Retrieves the current chat history stored in the user session for the Vesta chatbot.
 * If no history exists, returns an empty JSON object.
 * 
 * @param {Object} req represents the express request object with session data
 * @param {Object} res represents the express response object used to send the chat history as JSON
 */
async function getChatHistory(req, res)
{
    if(!req.session.vestaChatHistory)
    {
        res.json({});
        return;
    }
    res.json(req.session.vestaChatHistory);
}

/**
 * Sends the custom 404 error page to the client when a requested route is not found.
 * 
 * @param {Object} req represents the express request object
 * @param {Object} res represents the express response object used to send the 404 page
 */
function load404Page(req, res) {
    res.status(404);
    res.sendFile(path.join(__dirname, "app", "html", "404.html"));
}

/**
 * Logs the server port URL to the console when the server starts.
 */
function logServerPort() {
    console.log(`Server running at http://localhost:${port}`);
}

/**
 * Configures the Express server by setting up session storage with MongoDB,
 * parsing middleware for JSON and URL-encoded data, static file directories,
 * and the view engine for rendering EJS templates.
 */
function setupServerConfig() {
    // Setup session management with MongoDB store
    const mongoStore = MongoStore.create({
        mongoUrl: `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/sessions`,
        crypto: { secret: process.env.MONGODB_SESSION_SECRET }
    });

    // Middleware for parsing request bodies
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.use(session({
        secret: process.env.NODE_SESSION_SECRET,
        store: mongoStore,
        saveUninitialized: false,
        resave: true
    }));

    // Serve Static Files
    app.use("/images", express.static(path.join(__dirname, "public", "images")));
    app.use("/scripts", express.static(path.join(__dirname, "public", "scripts")));
    app.use("/styles", express.static(path.join(__dirname, "public", "styles")));
    app.use("/templates", express.static(path.join(__dirname, "app", "html", "templates")));

    // Set view engine and views directory
    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "app", "views"));
}

/**
 * Sets up route handlers for login-related requests including rendering the login page,
 * handling user authentication, managing failed login attempts, and redirecting
 * users based on their authentication status.
 */
function setupLoginRequests() {
    // Register new user
    app.post("/register", registerUser);

    // Show login page
    app.get("/login", loadLoginPage);

    // Authenticate user and create session
    app.post("/login", loginUser);

    // Logout user and destroy session
    app.post("/logout", logoutUser);
}

/**
 * Configures route handlers for Safety Data Sheet (SDS) requests, including displaying
 * SDS entries, handling search queries, serving detailed SDS views, and managing
 * user access to SDS-related operations.
 */
function setupSDSRequests() {
    // SDS listing route
    app.get("/sds", loadSDSLinksPage);

    // Specific SDS detail page
    app.get("/sds/:substance_name", userAuthentication, loadSDSPage);

    // SDS search API
    app.post("/sds/search", userAuthentication, searchChemicalsCollection);
}

/**
 * Sets up internal API endpoints used for asynchronous operations such as data retrieval,
 * updates, and filtering. These endpoints typically support frontend AJAX requests and
 * facilitate interaction with the SDS database and other backend resources.
 */
function setupAPIRequests() {
    app.use("/api", userAuthentication);

    // Get current user session info
    app.get("/api/user", getUserEmailJSON);

    // Save a new appliance
    app.post("/api/appliances", saveAppliance);

    // Get all appliances for logged-in user
    app.get("/api/appliances", getAppliances);

    // Get appliance count for current user
    app.get("/api/appliances/count", getApplianceCount);

    // API endpoint to delete an appliance
    app.delete("/api/appliances/:id", deleteAppliance);

    // API endpoint to update an appliance's service date
    app.put("/api/appliances/:id", updateLastServiceDate);
}

/**
 * Defines routes for managing contact-related data, including submission of contact forms,
 * retrieval of messages, and any administrative contact review processes. These endpoints
 * handle both public user input and internal access to contact information.
 */
function setupContactsRequests() {
    app.use("/contacts", userAuthentication);

    // Render contact form page
    app.get("/contacts", userAuthentication, loadContactsPage);

    // Find handyman contacts using Yelp API
    app.post("/contacts/search", userAuthentication, getContacts);
}

/**
 * Sets up routes for interacting with VestaBot, including message handling,
 * chatbot session initialization, and response delivery. These endpoints enable
 * client-server communication for chatbot functionalities.
 */
function setupVestabotRequests() {
    // Chatbot UI page
    app.get("/vestabot", userAuthentication, loadVestabotPage);

    // Vesta chat endpoint
    app.post("/vestabot/chat", sendVestaChat);
    app.post("/vestabot/history", getChatHistory);
}

/**
 * Initializes and starts the Express server, applies middleware,
 * sets up API endpoints, and begins listening on the configured port.
 * This function serves as the main entry point for launching the backend server.
 */
async function setupServer() {
    setupServerConfig();

    // Redirect root to login or main page based on session
    app.get("/", userAuthentication, redirectMain);

    setupLoginRequests();

    // Protected route to display reminders
    app.get("/reminders", userAuthentication, loadRemindersPage);

    // Protected main page
    app.get("/main", userAuthentication, loadMainPage);

    setupSDSRequests();

    setupAPIRequests();

    setupContactsRequests();

    setupVestabotRequests();

    // 404 fallback
    app.get("*dummy", load404Page);

    // Start Server
    app.listen(port, logServerPort);
}

// Initialize server
setupServer();