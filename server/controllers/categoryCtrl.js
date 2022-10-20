const Category = require("../models/categoryModel");
const jwt = require("jsonwebtoken");

const CategoryCtrl = {
  getAllCategory: async (req, res) => {
    try {
      let Category;
      Category = await Category.find();

      res.status(200).json({ Category });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createCategory: async (req, res) => {
    const newCategory = new Category(req.body);
    try {
      await newCategory.save();
      res.status(200).json({ msg: "Voucher has been created" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateCategory: async (req, res) => {
    try {
      await Category.findByIdAndUpdate(
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

module.exports = CategoryCtrl;
