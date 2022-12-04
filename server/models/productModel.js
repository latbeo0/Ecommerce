const mongoose = require('mongoose');
const StateModel = require('./stateModel');
const SaleModel = require('./saleModel');

const ProductSchema = new mongoose.Schema(
    {
        productCode: { type: String, required: true },
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
ProductSchema.pre("save", function (next) {
    var model = this;
    counter.findByIdAndUpdate(
      { _id: "PRO" },
      { $inc: { seq: 1 } },
      function (error, counter) {
        if (error) return next(error);
        var str = "" + counter.seq;
        var pad = "0000";
        var ans = pad.substring(0, pad.length - str.length) + str;
        model.cateCode = `PRO${new Date().getMonth() + 1}${new Date().getFullYear()}${ans}`;
        next();
      }
    );
  });
module.exports = mongoose.model('products', ProductSchema);
