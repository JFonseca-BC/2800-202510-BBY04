// Load environment variables from a .env file into process.env
require('dotenv').config();

// Import MongoClient from the mongodb package to connect to MongoDB Atlas
const { MongoClient } = require("mongodb");


// Retrieve MongoDB credentials and configuration from environment variables
const mongodb_user = process.env.MONGODB_USER;
const mongodb_password = process.env.MONGODB_PASSWORD;
const mongodb_host = process.env.MONGODB_HOST;
const mongodb_database = process.env.MONGODB_DATABASE;


// Construct the MongoDB connection URI using the credentials
const atlasURI = `mongodb+srv://${mongodb_user}:${mongodb_password}@${mongodb_host}/?retryWrites=true&w=majority`;

// Create a new MongoClient instance using the constructed URI
const client = new MongoClient(atlasURI, {});


/**
 * Establishes a connection to the MongoDB database using the MongoDB client.
 * 
 * @returns {Object} a reference to the connected MongoDB database instance
 */
async function connectDB() {
    try {

        // Attempt to connect to the MongoDB Atlas cluster
        await client.connect();

        // Return a reference to the specific database defined in the environment variable
        return client.db(mongodb_database); 
    } catch (error) {

        // Log an error if the connection fails
        console.error("MongoDB connection error:", error);

        // Exit the process to stop the server if database connection fails
        process.exit(1); 
    }
}

// Export the connectDB function so it can be imported and used in other files
module.exports = connectDB;
