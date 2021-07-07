var express = require('express');
var router = express.Router();

// For temporary use, replace with MongoDB
var users = new Map();
users.set(12345,
    {name: "John",
    lastName: "Doe",
    email: "jd@hotmail.com",
    about: "blah blah blah",
    phone: "604-123-1234",
    street: "12345 Easy st.",
    city: "Vancouver",
    state: "British Columbia",
    zip: "123456",
    country: "Canada"});

router.get('/edit/:id/', function (req, res, next) {
    const userId = Number(req.params.id);
    const cUser = users.get(userId);
    res.send(cUser);
});

router.put('/edit/:id/', function (req, res, next) {
    const userId = Number(req.params.id);
    users.set(userId, req.body);
    const cUser = users.get(userId);
    res.send(cUser);
});

module.exports = router;