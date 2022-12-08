const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const CategorySchema = new mongoose.Schema(
  {
    cateCode: { type: String, required: true, unique: true },
    cateName: { type: String, required: true },
    seq: { type: Number },
  },
  {
    timestamps: true,
  }
);
CategorySchema.plugin(AutoIncrement, { inc_field: "seq" });
module.exports = mongoose.model("categories", CategorySchema);
