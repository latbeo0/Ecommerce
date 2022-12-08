const State = require("../models/stateModel");

const stateCtrl = {
    getAllstate: async (req, res) => {
        try {
            const states = await State.find();

            res.status(200).json({ states });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
};

module.exports = stateCtrl;
