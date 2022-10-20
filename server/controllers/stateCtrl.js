const State = require("../models/stateModel");
const jwt = require("jsonwebtoken");

const StateCtrl = {
  getAllState: async (req, res) => {
    try {
      let state;
      state = await State.find();

      res.status(200).json({ state });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createState: async (req, res) => {
    const newState = new State(req.body);
    try {
      await newState.save();
      res.status(200).json({ msg: "Voucher has been created" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateState: async (req, res) => {
    try {
      await State.findByIdAndUpdate(
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

module.exports = StateCtrl;
