const User = require('../models/User');

const authCtrl = {
    register: async (req, res) => {
        try {
            res.status(200).json({
                msg: 'Test server',
            });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
};

module.exports = authCtrl;
