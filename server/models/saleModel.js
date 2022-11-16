const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const SaleSchema = new mongoose.Schema(
  {
    saleCode: { type: String, required: true, unique: true },
    saleName: { type: String, required: true },
    discount: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    numericalOrder: { type: Number },

  },
  {
    timestamps: true,
  }
);
SaleSchema.plugin(AutoIncrement, { inc_field: "numericalOrder" });

module.exports = mongoose.model("sales", SaleSchema);
