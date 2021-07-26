const express = require('express');
const User = require('../models/user');

var router = express.Router();

// GET Request - Get All Users
router.get('/', function (req, res, next) {
    User.find().then((docs) => {
        console.log("Successfully got data from the DB.");
        console.log(docs);
        res.send(docs);
    }).catch((err) => {
        console.log("Failed to get data the DB.");
        console.log(err);
        throw new Error("Failed to get data the DB.");
    });
});

// GET Request - Search for User by Name
router.get('/:search', function (req, res, next) {
    const searchInput = req.params.search;
    User.find({
        name: { $regex: searchInput }
    }).then((docs) => {
        console.log("Successfully searched the DB.");
        console.log(docs);
        res.send(docs);
    }).catch((err) => {
        console.log("Failed to search the DB.");
        console.log(err);
        throw new Error("Failed to search the DB.");
    });
});

// POST Request - Add User
router.post('/:email/:password', function (req, res, next) {
    const email = req.params.email;
    const password = req.params.password;
    const newUser = new User({
        email: email,
        password: password    
    })
    newUser.save().then((doc) => {
        console.log("Successfully added user to DB.");
        console.log(doc);
        res.send();
    }).catch((err) => {
        console.log("Failed to add user to DB.");
        console.log(err);
        throw new Error("Failed to add user to DB.");
    });
});

// DELETE Request - Delete User From Trip
router.delete('/:email', function (req, res, next) {
    const email = req.params.email;
    User.deleteOne({
        email: email
    }).then((del) => {
        console.log("Successfully removed user from the DB.");
        console.log(del);
        res.send();
    }).catch((err) => {
        console.log("Failed to remove user from the DB.");
        console.log(err);
        throw new Error("Failed to remove user from the DB.");
    });
});

// LOGIN -- NEEDS: username, email, password
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    User.find({
        username: { $regex: username },
        password: { $regex: password }
    }).then(data => {
        console.log("Successfully logged in.");
        console.log(data);
        res.send(data);
    }).catch(err => {
        console.log("Failed to log in.");
        console.log(err);
        res.status(400).send({ error: err });
    });
});

// REGISTER -- NEEDS: username, email, password, first_name, last_name
router.post('/register', (req, res) => {
    console.log(req)
    const { username, email, password, first_name, last_name } = req.body;
    const newUser = new User({ username, email, password, first_name, last_name });
    newUser.save().then(data => {
        console.log("Successfully added user to DB.");
        console.log(data);
        res.send();
    }).catch(err => {
        console.log("Failed to add user to DB.");
        console.log(err);
        res.status(400).send({ error: err });
    });
});

module.exports = router;
