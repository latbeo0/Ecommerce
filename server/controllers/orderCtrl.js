const Orders = require('../models/orderModel');

const orderCtrl = {
    payment: async (req, res) => {
        try {
            const {
                listOderItems,
                addressShipping,
                itemsPrice,
                totalPrice,
                userId,
            } = req.body;

            const newOrder = new Orders({
                listOderItems,
                addressShipping,
                itemsPrice,
                totalPrice,
                userId,
            });

            await newOrder.save();

            res.status(200).json({ id: newOrder._id.toString() });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    getUserOrders: async (req, res) => {
        try {
            const orders = await Orders.find({ userId: req.params.id });
            res.status(200).json({ orders });
        } catch (err) {
            res.status(500).json({ err });
        }
    },
    getOrder: async (req, res) => {
        try {
            const order = await Orders.findById(req.body.idOrder);

            res.status(200).json({ order });
        } catch (err) {
            res.status(500).json({ err });
        }
    },
};

module.exports = orderCtrl;
