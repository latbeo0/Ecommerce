const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please enter username!'],
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: [true, 'Please enter your email!'],
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please enter your password!'],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('User', UserSchema);
