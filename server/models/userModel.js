const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'Please enter email!'],
            trim: true,
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Please enter your password!'],
        },
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        birthDate: {
            type: Date,
        },
        address: {
            type: Object,
        },
        gender: {
            type: String,
        },
        avatar: {
            type: String,
        },
        phone: {
            type: String,
        },
        favoriteProductID: {
            type: Array,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        roleID: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('User', UserSchema);
