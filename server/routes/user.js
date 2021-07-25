const express = require('express');
const User = require('../models/user');

var router = express.Router();

let usersCollection = [];

// GET Request - Get All Users
router.get('/', function (req, res, next) {
  User.find()
    .then((docs) => {
      console.log('Successfully got data from the DB.');
      res.send(docs);
    })
    .catch((err) => {
      console.log('Failed to get data the DB.');
      console.log(err);
      throw new Error('Failed to get data the DB.');
    });
});

// GET Request - Search for User by Name
router.get('/:search', function (req, res, next) {
  const searchInput = req.params.search;
  User.find({
    username: { $regex: searchInput },
  })
    .then((docs) => {
      console.log('Successfully searched the DB.');
      console.log(docs);
      res.send(docs);
    })
    .catch((err) => {
      console.log('Failed to search the DB.');
      console.log(err);
      throw new Error('Failed to search the DB.');
    });
});

// POST Request - Add User
router.post('/', function (req, res, next) {
  const newUser = new User(req.body);
  newUser
    .save()
    .then((doc) => {
      console.log('Successfully added user to DB.');
      console.log(doc);
      res.send();
    })
    .catch((err) => {
      console.log('Failed to add user to DB.');
      console.log(err);
      res.send(err);
      throw new Error('Failed to add user to DB.');
    });
});

// DELETE Request - Delete User From Trip
router.delete('/:email', function (req, res, next) {
  const email = req.params.email;
  User.deleteOne({
    email: email,
  })
    .then((del) => {
      console.log('Successfully removed user from the DB.');
      console.log(del);
      res.send();
    })
    .catch((err) => {
      console.log('Failed to remove user from the DB.');
      console.log(err);
      throw new Error('Failed to remove user from the DB.');
    });
});

module.exports = router;
