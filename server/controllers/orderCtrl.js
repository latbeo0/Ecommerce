const Orders = require("../models/orderModel");
const Product = require("../models/productModel");

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

      const products = [];
      for (const productTemp of listOderItems) {
        const product = await Product.findById({
          _id: productTemp.product._id,
        });
        products.push(product);
      }

      let isError = false;
      for (const productTemp of listOderItems) {
        const indexProduct = products.findIndex(
          (item) => item._id.toString() === productTemp.product._id
        );
        const quantityDb = products[indexProduct].color.details.find(
          (item) => item.size === productTemp.size
        ).quantity;
        if (
          indexProduct === -1 || // Sản phẩm không có trong db
          quantityDb < productTemp.count || // Số lượng sản phẩm mua nhiều hơn db có
          !products[indexProduct].isStock // Sản phẩm không được bán nữa
        ) {
          isError = true;
        }
      }

      if (isError) {
        return res.status(500).json({ msg: "Something wrong when payment" });
      }

      for (const productTemp of listOderItems) {
        const indexProduct = products.findIndex(
          (item) => item._id.toString() === productTemp.product._id
        );
        const quantityDb = products[indexProduct].color.details.find(
          (item) => item.size === productTemp.size
        ).quantity;

        const left = quantityDb - productTemp.count;

        await Product.updateMany(
          {
            _id: productTemp.product._id,
            "color.details.size": productTemp.size,
          },
          {
            $set: { "color.details.$.quantity": left },
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
  rollback: async (req, res) => {
    try {
      const { orderCode, listOderItems } = req.body;

      const products = [];
      for (const productTemp of listOderItems) {
        const product = await Product.findById({
          _id: productTemp.product._id,
        });
        products.push(product);
      }

      for (const productTemp of listOderItems) {
        const indexProduct = products.findIndex(
          (item) => item._id.toString() === productTemp.product._id
        );
        const quantityDb = products[indexProduct].color.details.find(
          (item) => item.size === productTemp.size
        ).quantity;

        const left = quantityDb + productTemp.count;

        await Product.updateMany(
          {
            _id: productTemp.product._id,
            "color.details.size": productTemp.size,
          },
          {
            $set: { "color.details.$.quantity": left },
          }
        );
      }

      await Orders.deleteOne({ orderCode });

      res.status(200).json({ msg: "Rollback successful" });
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
      const orders = await Orders.findOne({
        orderCode: req.body.orderCode,
      });

      res.status(200).json({ orders });
    } catch (err) {
      res.status(500).json({ err });
    }
  },
  approveOrderById: async (req, res) => {
    try {
      const orders = await Orders.findOneAndUpdate(
        { _id: req.params.id },
        {
          stateOrder: "Approved",
        }
      );
      await orders.save()
      res.status(200).json({ msg: "Approved" });
    } catch (err) {
      res.status(500).json({ err });
    }
  },
};

module.exports = orderCtrl;
