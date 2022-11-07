const Product = require('../models/productModel');
const ProductMaster = require('../models/productMasterModel');

const jwt = require('jsonwebtoken');

const productCtrl = {
    //Product Master
    getAllProductMaster: async (req, res) => {
        let productMaster;
        try {
            // console.log(1);
            productMaster = await ProductMaster.find()
                .populate({
                    path: 'vCollection',
                    select: 'collectName -collectCode',
                })
                .populate({ path: 'vCategory', select: 'cateName -cateCode' });
            for (const pm of productMaster) {
                const product = await Product.find({ productMasterId: pm._id });
                pm.productDetails = [...pm.productDetails].concat(product);
            }

            await res.status(200).json({ productMaster });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    getProductMasterById: async (req, res) => {
        try {
            const productMaster = await ProductMaster.findById(req.params.id);
            res.status(200).json({ productMaster });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    createProductMaster: async (req, res) => {
        const newProductMaster = new ProductMaster(req.body);
        try {
            await newProductMaster.save();
            res.status(200).json({ msg: 'Product has been created' });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    updateProductMaster: async (req, res) => {
        try {
            await ProductMaster.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(200).json({ msg: 'Updated product success' });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    //Get All Product (Sửa)
    getAllProduct: async (req, res) => {
        try {
            let result = [];
            const temp = await Product.find().limit(3);

            // for (const product of temp) {
            //     const productMaster = await ProductMaster.findOne({
            //         _id: product.productMasterId,
            //     });
            //     const { productName, productDescription, stateCode, saleCode } =
            //         productMaster;
            //     const handle = {
            //         ...product._doc,
            //         productName,
            //         productDescription,
            //         stateCode,
            //         saleCode,
            //     };
            //     result.push(handle);
            // }

            const test = temp.map(async (product) => {
                const productMaster = await ProductMaster.findOne({
                    _id: product.productMasterId,
                });
                // const { productName, productDescription } = productMaster;
                // const handle = {
                //     ...product._doc,
                //     productName,
                //     productDescription,
                // };

                // console.log(handle);
                // return handle;
                return productMaster;
            });

            await res.status(200).json({ test });
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
    getProductByIdMaster: async (req, res) => {
        try {
            const product = await Product.find({
                productMasterId: req.params.id,
            })
                .populate({ path: 'vSale', select: 'saleName -saleCode' })
                .populate({ path: 'vState', select: 'stateName -stateCode' });
            res.status(200).json({ product });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    getProductByName: async (req, res) => {
        try {
            var regex = new RegExp(req.params.name, 'i');
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
            res.status(200).json({ msg: 'Product has been created' });
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
            res.status(200).json({ msg: 'Updated product success' });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    deleteProduct: async (req, res) => {},
};

module.exports = productCtrl;
