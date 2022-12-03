const mongoose = require('mongoose');
const roleModel = require('./roleModel');

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
            default: '',
        },
        lastName: {
            type: String,
            default: '',
        },
        birthDate: {
            type: Date,
        },
        addressShipping: {
            type: Array,
        },
        gender: {
            type: String,
        },
        avatar: {
            type: String,
            default:
                'https://res.cloudinary.com/da3pohnlj/image/upload/v1637204419/user_1_kq1w6v.png',
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
        roleCode: {
            type: String,
            default: 'CUSTOMER',
        },
        level: {
            type: Number,
            default: 1,
        },
    },
    {
        timestamps: true,
    }
);
UserSchema.virtual('vRole', {
    ref: roleModel,
    localField: 'roleCode',
    foreignField: 'roleCode',
});

UserSchema.set('toObject', { virtuals: true });
UserSchema.set('toJSON', { virtuals: true });
module.exports = mongoose.model('User', UserSchema);
