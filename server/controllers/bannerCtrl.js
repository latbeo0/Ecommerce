const Banner = require("../models/bannerModel");
const jwt = require("jsonwebtoken");

const BannerCtrl = {
  getBannerCode: async (req, res) => {
    let newBanner = new Banner();
    const code = `CTG${new Date().getFullYear()}${newBanner.seq}`;
    try {
      res.status(200).json({ code });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getAllBanner: async (req, res) => {
    try {
      let banner;
      banner = await Banner.find();

      res.status(200).json({ banner });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createBanner: async (req, res) => {
    try {
      await newBanner.save();
      res.status(200).json({ msg: "Banner has been created" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateBanner: async (req, res) => {
    try {
      await Banner.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json({ msg: "Update banner successfully" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = BannerCtrl;
