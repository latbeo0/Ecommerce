const mongoose = require("mongoose");

const SaleSchema = new mongoose.Schema(
  {
    saleCode: { type: String, required: true, unique: true },
    saleName: { type: String, required: true },
    discount: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("sales", SaleSchema);
