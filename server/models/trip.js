const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  // selectedFiles: {
  //   type: [File],
  // },
  selectedUsers: {
    type: [String],
  },
});

const Trip = mongoose.model('Trips', TripSchema);

module.exports = Trip;
