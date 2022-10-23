const mongoose = require("mongoose");
const roleModel = require("./roleModel");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please enter email!"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password!"],
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    birthDate: {
      type: Date,
    },
    address: {
      type: Object,
    },
    gender: {
      type: String,
    },
    avatar: {
      type: String,
    },
    phone: {
      type: String,
    },
    favoriteProductID: {
      type: Array,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    roleCode: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
UserSchema.virtual("vRole", {
  ref: roleModel,
  localField: "roleCode",
  foreignField: "roleCode",
});

UserSchema.set("toObject", { virtuals: true });
UserSchema.set("toJSON", { virtuals: true });
module.exports = mongoose.model("User", UserSchema);
