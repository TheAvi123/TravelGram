const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    validate: (input) => {
      return validator.isEmail(input);
    },
  },
  password: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
    validate: (input) => {
      return validator.isAlpha(input, 'en-US');
    },
  },
  last_name: {
    type: String,
    required: true,
    validate: (input) => {
      return validator.isAlpha(input, 'en-US');
    },
  },
  about: {
    type: String,
    required: false,
  },
  photo_id: {
    type: String,
    required: false,
  },
  trips: {
    type: Array,
    required: false,
    default: [],
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
