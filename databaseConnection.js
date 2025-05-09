require('dotenv').config();
const { MongoClient } = require("mongodb");

const mongodb_user = process.env.MONGODB_USER;
const mongodb_password = process.env.MONGODB_PASSWORD;
const mongodb_host = process.env.MONGODB_HOST;
const mongodb_database = process.env.MONGODB_DATABASE;

const atlasURI = `mongodb+srv://${mongodb_user}:${mongodb_password}@${mongodb_host}/?retryWrites=true&w=majority`;

const client = new MongoClient(atlasURI, {});

async function connectDB() {
    try {
        await client.connect();
        return client.db(mongodb_database); // Return actual database instance
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Stop server if DB connection fails
    }
}

module.exports = connectDB;
