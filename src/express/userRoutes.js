const express = require('express');
const fs = require('fs');
const router = express.Router();

const path = require('path');
const jsonPath = path.join('resource', 'user.json');

let users = [];

// Load initial user data from user.json
fs.readFile(jsonPath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading user data:', err);
    } else {
        try {
            users = JSON.parse(data);
            if (!Array.isArray(users)) {
                throw new Error('User data is not an array');
            }
            console.log('User data loaded:', users);
        } catch (parseError) {
            console.error('Error parsing user data:', parseError);
        }
    }
});

// Helper function to save users to user.json
function saveUsers() {
    fs.writeFile(jsonPath, JSON.stringify(users, null, 2), (err) => {
        if (err) {
            console.error('Error saving user data:', err);
        }
    });
}

// Create a new user
router.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    saveUsers();
    res.status(201).send(user);
});

// Get all users
router.get('/users', (req, res) => {
    console.log('Get all users');
    res.send(users);
});

// Get a user by ID
router.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
    res.send(user);
});

// Update a user by ID
router.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');

    Object.assign(user, req.body);
    saveUsers();
    res.send(user);
});

// Delete a user by ID
router.delete('/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).send('User not found');

    const deletedUser = users.splice(userIndex, 1);
    saveUsers();
    res.send(deletedUser);
});

module.exports = router;
