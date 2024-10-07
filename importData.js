const mongoose = require('mongoose');
const User = require('./models/User'); // Ensure the path is correct
const fs = require('fs');

// MongoDB connection string
const mongoURI = 'mongodb://127.0.0.1:27017/telecom-directory';

// Function to import data
async function importData() {
    try {
        // Connect to MongoDB
        await mongoose.connect(mongoURI);

        // Read mock data from JSON file
        const data = fs.readFileSync('./MOCK_DATA.json', 'utf8'); // Update the path if needed
        const users = JSON.parse(data); // Parse the JSON data

        // Insert data into the database
        await User.insertMany(users);
        console.log('Data imported successfully!');

        // Close the connection
        mongoose.connection.close();
    } catch (error) {
        console.error('Error importing data:', error);
        mongoose.connection.close();
    }
}

// Run the import function
importData();
