const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
    {
        listOderItems: { type: Array, required: true },
        addressShipping: { type: Object, required: true },
        itemsPrice: { type: Number, required: true },
        shipPrice: { type: Number, default: 20000 },
        taxPrice: { type: Number, default: 20000 },
        totalPrice: { type: Number, required: true },
        userId: { type: String, required: true },
        isDelivered: { type: Boolean, default: false },
        deliveredAt: { type: Date },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Orders', OrderSchema);
