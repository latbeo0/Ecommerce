const mongoose = require("mongoose");

const AddressShippingSchema = new mongoose.Schema(
    {
        province: {
            type: String,
            required: true,
        },
        district: {
            type: String,
            required: true,
        },
        ward: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("AddressShipping", AddressShippingSchema);
