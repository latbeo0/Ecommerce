const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        productName: { type: String, required: true },
        productDescription: { type: String, required: true },
        primaryImage: { type: String, required: true },
        secondaryImage: { type: String, required: true },
        categoryID: { type: String },
        stateID: { type: String, required: true },
        price: { type: String, required: true },
        newPrice: { type: String },
        collectionID: { type: String },
        saleID: { type: String },
        detail: { type: Array },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('products', ProductSchema);
