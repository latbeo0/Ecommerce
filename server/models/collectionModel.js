const mongoose = require("mongoose");

const CollectionSchema = new mongoose.Schema(
  {
    collectCode: { type: String, required: true, unique: true },
    collectName: { type: String, required: true },
    collectDescription: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("collections", CollectionSchema);
