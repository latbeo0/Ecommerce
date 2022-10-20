const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema(
  {
    roleCode: { type: String, required: true, unique: true },
    roleName: { type: String, required: true },
    level: { type: Number },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("roles", RoleSchema);
