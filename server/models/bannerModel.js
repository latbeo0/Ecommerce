const mongoose = require("mongoose");

const BannerSchema = new mongoose.Schema(
  {
    bannerCode: { type: String, required: true, unique: true },
    bannerName: { type: String, required: true },
    bannerTitle: { type: String },
    bannerDescription: { type: String },
    bannerSrc: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("banners", BannerSchema);
