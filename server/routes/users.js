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

// GET Request - Get User Info by ID
router.get('/profile/:id/', function (req, res, next) {
    const userId = req.params.id;
    User.findOne({_id: userId})
        .then((data) => {
            res.send(data);
            console.log(`sending data for user ${data.first_name} with id ${data._id}`);
        })
        .catch((err) => console.log(`Failed to get user with id ${userId}`));
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

// PUT Request - Edit User Info
router.put('/profile/:id/', function (req, res, next) {
    const userId = req.params.id;
    User.findOneAndUpdate(
        {_id: userId},
        {$set: {
            email: req.body.email,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            about: req.body.about,
            city: req.body.city,
            country: req.body.country,
            state: req.body.state,
            street: req.body.street,
            zip: req.body.zip,
            phone: req.body.phone}},
        {new: true},
        (err, doc) => {
            if(err) {
                console.log("Failed to update user info");
            } else {
                res.send(doc);
            }
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

module.exports = router;
