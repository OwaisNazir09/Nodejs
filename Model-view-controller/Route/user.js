const express = require('express');
const router = express.Router();
const User = require('../Models/user'); // Import User model

// To get the information from the server
router.get('/', async (req, res) => {
    try {
        const data = await User.find({});
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
});

// To post new information to the server
router.put('/', async (req, res) => {
    try {
        const body = req.body;

        const newUser = await User.create({
            first_name: body.first_name,
            last_name: body.last_name,
            age: body.age,
            email: body.email
        });

        console.log(newUser);
        res.status(201).send(newUser);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
});

module.exports = router;
