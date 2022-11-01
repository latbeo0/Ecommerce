const mongoose = require("mongoose");
const CollectionModel = require("./collectionModel");
const CategoryModel = require("./categoryModel");
const ProductMasterSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    productDescription: { type: String, required: true },
    gender: { type: String, required: true },
    cateCode: { type: String },
    collectCode: { type: String },
    productDetails: {type: Array},
  },
  {
    id: false,
    timestamps: true,
  }
);
ProductMasterSchema.virtual("vCollection", {
  ref: CollectionModel,
  localField: "collectCode",
  foreignField: "collectCode",
});
ProductMasterSchema.virtual("vCategory", {
  ref: CategoryModel,
  localField: "cateCode",
  foreignField: "cateCode",
});

ProductMasterSchema.set("toObject", { virtuals: true });
ProductMasterSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("productmasters", ProductMasterSchema);
