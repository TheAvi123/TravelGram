var express = require('express');
var router = express.Router();
var tripModel = require('../models/trip');

router.post('/', async (req, res) => {
  const trip = new tripModel(req.body);
  try {
    await trip.save();
    res.send(trip);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get('/', async (req, res) => {
  const page = Number(req.query.page);
  const pageSize = Number(req.query.pageSize);
  const title = req.query.searchTitle;
  try {
    const trips = await tripModel
      // .find({})
      .find({ title: { $regex: title, $options: 'i' } })
      .skip(pageSize * (page - 1))
      .limit(pageSize);
    const tripCount = await tripModel.count({});
    const pageCount = Math.ceil(tripCount / pageSize);
    console.log(trips);
    res.send({ trips, pageCount });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
