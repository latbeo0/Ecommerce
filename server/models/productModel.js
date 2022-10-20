const mongoose = require("mongoose");
const StateModel = require("./stateModel");
const CollectionModel = require("./collectionModel");
const CategoryModel = require("./categoryModel");
const SaleModel = require("./saleModel");
const ProductSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    productDescription: { type: String, required: true },
    primaryImages: { type: Array, required: true },
    secondaryImages: { type: Array, required: true },
    gender: { type: String, required: true },
    stateCode: { type: String },
    cateCode: { type: String },
    collectCode: { type: String },
    saleCode: { type: String },
    colors: { type: Array },
    price: { type: Number, required: true },
    newPrice: { type: Number },
    isStock: { type: Boolean, required: true },
  },
  {
    id: false,
    timestamps: true,
  }
);
ProductSchema.virtual("vState", {
  ref: StateModel,
  localField: "stateCode",
  foreignField: "stateCode",
});
ProductSchema.virtual("vCollection", {
  ref: CollectionModel,
  localField: "collectCode",
  foreignField: "collectCode",
});
ProductSchema.virtual("vCategory", {
  ref: CategoryModel,
  localField: "cateCode",
  foreignField: "cateCode",
});
ProductSchema.virtual("vSale", {
  ref: SaleModel,
  localField: "saleCode",
  foreignField: "saleCode",
});

ProductSchema.set("toObject", { virtuals: true });
ProductSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("products", ProductSchema);
