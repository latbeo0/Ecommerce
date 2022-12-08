const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
    {
        orderCode: { type: String, required: true, unique: true },
        listOderItems: { type: Array, required: true },
        addressShipping: { type: Object, required: true },
        subPrice: { type: Number, required: true },
        shippingPrice: { type: Number, default: 0 },
        totalPrice: { type: Number, required: true },
        userId: { type: String, required: true },
        payment: { type: Object, required: true },
        stateOrder: { type: String, default: 'Pending' },
        deliveredAt: { type: Date },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Orders', OrderSchema);
