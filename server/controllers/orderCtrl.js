const Orders = require('../models/orderModel');
const Product = require('../models/productModel');

const orderCtrl = {
    payment: async (req, res) => {
        try {
            const {
                orderCode,
                listOderItems,
                addressShipping,
                subPrice,
                totalPrice,
                userId,
                payment,
            } = req.body;

            for (const productTemp of listOderItems) {
                const left =
                    productTemp.product.color.details.find(
                        (item) => item.size === productTemp.size
                    ).quantity - productTemp.count;

                await Product.updateMany(
                    {
                        _id: productTemp.product._id,
                        'color.details.size': productTemp.size,
                    },
                    {
                        $set: { 'color.details.$.quantity': left },
                    }
                );
            }

            const newOrder = new Orders({
                orderCode,
                listOderItems,
                addressShipping,
                subPrice,
                totalPrice,
                userId,
                payment,
            });

            await newOrder.save();

            res.status(200).json({ newOrder });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    getUserOrders: async (req, res) => {
        try {
            const orders = await Orders.find({ userId: req.params.id });

            orders.sort((a, b) => {
                const temp1 = a.createdAt.getTime();
                const temp2 = b.createdAt.getTime();

                if (temp1 - temp2 > 0) {
                    return -1;
                }

                if (temp1 - temp2 < 0) {
                    return 1;
                }

                return 0;
            });

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
    getAllOrder: async (req, res) => {
        try {
            const orders = await Orders.find();

            res.status(200).json({ orders });
        } catch (err) {
            res.status(500).json({ err });
        }
    },
    getOrderByDate: async (req, res) => {
        try {
            const orders = await Orders.find({
                createdAt: { $gte: req.body.fromDate, $lte: req.body.toDate },
            });

            res.status(200).json({ orders });
        } catch (err) {
            res.status(500).json({ err });
        }
    },
    getOrderByCode: async (req, res) => {
        try {
            const orders = await Orders.find({
                orderCode: req.body.orderCode,
            });

            res.status(200).json({ orders });
        } catch (err) {
            res.status(500).json({ err });
        }
    },
};

module.exports = orderCtrl;
