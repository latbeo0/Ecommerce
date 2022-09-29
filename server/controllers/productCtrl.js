const Product = require("../models/productModel");
const jwt = require("jsonwebtoken");

const productCtrl = {
  getAllProduct: async (req, res) => {
    try {
      let Product;
      Product = await Product.find();

      res.status(200).json({ Product });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getProductById: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json({ product });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getProductByName: async (req, res) => {
    try {
      var regex = new RegExp(req.params.name, "i");
      Product.find({
        name: regex,
        inStock: true,
      }).then((Product) => {
        res.status(200).json({ Product });
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createProduct: async (req, res) => {
    const newProduct = new Product(req.body);
    try {
      await newProduct.save();
      res.status(200).json({ msg: "Product has been created" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateProduct: async (req, res) => {
    try {
      await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json({ msg: "Updated product success" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteProduct: async (req, res) => {},
  
};

module.exports = productCtrl;
