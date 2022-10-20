const mongoose = require("mongoose");

const StateSchema = new mongoose.Schema(
  {
    stateCode: { type: String, required: true, unique: true },
    stateName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("states", StateSchema);
