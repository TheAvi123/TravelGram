const mongoose = require('mongoose');
const validator = require('validator');

const ActivitySchema = new mongoose.Schema({
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
        required: false
    },
    coverImage: {
        type: String,
        required: false,
        validate: (input) => {
            return validator.isURL(input)
        }
    }
});

const Activity = mongoose.model('Activites', ActivitySchema);

module.exports = Activity;