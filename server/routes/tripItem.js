var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
  const newTripItem = req.body;
  console.log(newTripItem);
  res.send(newTripItem);
});

module.exports = router;
