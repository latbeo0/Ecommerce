const mongoose = require('mongoose');
const StateModel = require('./stateModel');
const SaleModel = require('./saleModel');

const ProductSchema = new mongoose.Schema(
    {
        productMasterId: { type: String, required: true },
        primaryImages: { type: Array, required: true },
        secondaryImages: { type: Array, required: true },
        stateCode: { type: String },
        saleCode: { type: String },
        color: { type: Object },
        price: { type: Number, required: true },
        newPrice: { type: Number },
        isStock: { type: Boolean, required: true },
    },
    {
        id: false,
        timestamps: true,
    }
);

ProductSchema.virtual('vState', {
    ref: StateModel,
    localField: 'stateCode',
    foreignField: 'stateCode',
});

ProductSchema.virtual('vSale', {
    ref: SaleModel,
    localField: 'saleCode',
    foreignField: 'saleCode',
});

ProductSchema.set('toObject', { virtuals: true });
ProductSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('products', ProductSchema);
