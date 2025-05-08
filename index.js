const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const bcrypt = require("bcrypt");
const path = require("path");

require("dotenv").config();
const app = express();
const port = 8000;
const saltRounds = 12;

/* Connect to MongoDB Properly */
const connectDB = require("./databaseConnection");

async function setupServer() {
    const database = await connectDB(); // Wait for database connection
    const userCollection = database.collection("users"); // Now this works!

    /* Middleware Setup */
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
app.use("/app", express.static(path.join(__dirname, "app")));



// Root Route
app.get("/", (req, res) => {
    if (!req.session.user) {
        return res.redirect("/login");
    }
    res.redirect("/main");
});


    /* Register Route */
    app.post("/register", async (req, res) => {
        console.log("Received registration request:", req.body);

        const { email, password } = req.body;
        if (!email || !password) return res.status(400).send("Missing required fields.");

        try {
            const existingUser = await userCollection.findOne({ email });
            if (existingUser) return res.status(400).send("Email already registered.");

            const hashedPassword = await bcrypt.hash(password, saltRounds);
            await userCollection.insertOne({ email, password: hashedPassword });

            req.session.userEmail = email;
            console.log(" User registered successfully:", email);
            res.redirect("/login");
        } catch (error) {
            console.error(" Registration error:", error);
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
    
            req.session.user = { email }; // Stores session
            res.redirect("/main"); //Redirects properly
        } catch (error) {
            res.status(500).send("Server error");
        }
    });
    
    // Home Route (Restricted)
    app.get("/main", (req, res) => {
        if (!req.session.user) {
            return res.redirect("/login"); // Redirects back to login if unauthenticated
        }
        res.sendFile(path.join(__dirname, "app", "html", "main.html"));
    });
    
    
    app.use((req, res, next) => {
        res.status(404);
        res.send("Page not found - 404");
    });













    /* ✅ Start Server */
    app.listen(port, () => {
        console.log(`✅ Server running at http://localhost:${port}`);
    });
}

setupServer();
