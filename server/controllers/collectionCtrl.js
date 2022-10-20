const Collection = require("../models/collectionModel");
const jwt = require("jsonwebtoken");

const CollectionCtrl = {
  getAllCollection: async (req, res) => {
    try {
      let collection;
      collection = await Collection.find();

      res.status(200).json({ collection });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createCollection: async (req, res) => {
    const newCollection = new Collection(req.body);
    try {
      await newCollection.save();
      res.status(200).json({ msg: "Voucher has been created" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateCollection: async (req, res) => {
    try {
      await Collection.findByIdAndUpdate(
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

module.exports = CollectionCtrl;
