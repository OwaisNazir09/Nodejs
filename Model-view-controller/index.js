const express = require('express');
const app = express();
const port = 8080;
const userRoutes = require('./Route/user'); // Ensure this path is correct
const { mongooseconnection } = require('./connection/config');

// Set up middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongooseconnection('mongodb://127.0.0.1:27017/');

// Use the router for routes starting with /user
app.use('/user', userRoutes);

app.listen(port, () => {
    console.log(`Server successfully started on port ${port}`);
});
