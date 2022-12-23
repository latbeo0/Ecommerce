const mongoose = require('mongoose');
const CollectionModel = require('./collectionModel');
const CategoryModel = require('./categoryModel');
const MaterialModel = require('./materialModel');

const ProductMasterSchema = new mongoose.Schema(
    {
        masterCode: { type: String },
        productName: { type: String, required: true },
        productDescription: { type: String, required: true },
        gender: { type: String, required: true },
        cateCode: { type: String },
        materialCode: { type: String },
        collectCode: { type: String },
        productDetails: { type: Array },
    },
    {
        id: false,
        timestamps: true,
    }
);
ProductMasterSchema.virtual('vCollection', {
    ref: CollectionModel,
    localField: 'collectCode',
    foreignField: 'collectCode',
});
ProductMasterSchema.virtual('vCategory', {
    ref: CategoryModel,
    localField: 'cateCode',
    foreignField: 'cateCode',
});
ProductMasterSchema.virtual('vMaterial', {
    ref: MaterialModel,
    localField: 'materialCode',
    foreignField: 'materialCode',
});

ProductMasterSchema.set('toObject', { virtuals: true });
ProductMasterSchema.set('toJSON', { virtuals: true });

ProductMasterSchema.pre('save', function (next) {
    var model = this;
    counter.findByIdAndUpdate(
        { _id: 'MAS' },
        { $inc: { seq: 1 } },
        function (error, counter) {
            if (error) return next(error);
            var str = '' + counter.seq;
            var pad = '0000';
            var ans = pad.substring(0, pad.length - str.length) + str;
            model.cateCode = `MAS${
                new Date().getMonth() + 1
            }${new Date().getFullYear()}${ans}`;
            next();
        }
    );
});
module.exports = mongoose.model('productmasters', ProductMasterSchema);
