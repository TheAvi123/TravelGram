var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
  const newTrip = req.body;
  console.log(newTrip);
  res.send(newTrip);
});

module.exports = router;
