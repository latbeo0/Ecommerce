const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    cateCode: { type: String, required: true, unique: true },
    cateName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("categories", CategorySchema);
