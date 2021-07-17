import mongoose from 'mongoose';
import validator from 'validator';

const UserSchema = new mongoose.Schema({
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
        required: true
    },
    first_name: {
        type: String,
        required: true,
        validate: (input) => {
            return validator.isAlpha(input, 'en-US');
        }
    },
    last_name: {
        type: String,
        required: true,
        validate: (input) => {
            return validator.isAlpha(input, 'en-US');
        }
    },
    about: {
        type: String,
        required: false
    },
    photo_id: {
        type: String,
        required: false
    },
    trips: {
        type: Array,
        required: true,
        default: []
    }
});

const User = mongoose.model('Users', UserSchema);

export default User;
