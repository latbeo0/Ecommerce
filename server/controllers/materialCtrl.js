const Material = require("../models/materialModel");
const jwt = require("jsonwebtoken");

const MaterialCtrl = {
    getMaterialCode: async (req, res) => {
        let newMaterial = new Material();
        const code = `MAT${new Date().getFullYear()}${newMaterial.seq}`;
        try {
            res.status(200).json({ code });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    getAllMaterial: async (req, res) => {
        try {
            let material;
            material = await Material.find();

            res.status(200).json({ material });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    createMaterial: async (req, res) => {
        const newMaterial = new Material(req.body);

        try {
            await newMaterial.save();
            res.status(200).json({ msg: "Material has been created" });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    updateMaterial: async (req, res) => {
        try {
            await Material.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(200).json({ msg: "Update material successfully" });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
};

module.exports = MaterialCtrl;
