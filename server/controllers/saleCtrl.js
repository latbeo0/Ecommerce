const Sale = require("../models/saleModel");
const jwt = require("jsonwebtoken");

const saleCtrl = {
  getAllSaleVoucher: async (req, res) => {
    try {
      let sale;
      sale = await Sale.find();

      res.status(200).json({ sale });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createSaleVoucher: async (req, res) => {
    const newVoucher = new Sale(req.body);
    try {
      await newVoucher.save();
      res.status(200).json({ msg: "Voucher has been created" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateSaleVoucher: async (req, res) => {
    try {
      await Sale.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json({ msg: "Update voucher successfully" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = saleCtrl;
