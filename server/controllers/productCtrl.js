const Product = require('../models/productModel');
const ProductMaster = require('../models/productMasterModel');
const queryString = require('query-string');
const jwt = require('jsonwebtoken');

const productCtrl = {
    //Product Master
    getAllProductMaster: async (req, res) => {
        let productMaster;
        try {
            productMaster = await ProductMaster.find()
                .populate({
                    path: 'vCollection',
                    select: 'collectName -collectCode',
                })
                .populate({ path: 'vCategory', select: 'cateName -cateCode' })
                .populate({
                    path: 'vMaterial',
                    select: 'materialName -materialCode',
                });
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
            const countProducts = await Product.find();
            const totalProducts = countProducts.length;

            const { pageSize = 15, pageIndex = 1 } = req.query;
            const countProductsSkipped = (pageIndex - 1) * pageSize;

            const listProducts = [];
            const listProductsTemp = await Product.find()
                .skip(countProductsSkipped)
                .limit(pageSize);

            for (const product of listProductsTemp) {
                const productMaster = await ProductMaster.findOne({
                    _id: product.productMasterId,
                });

                const { productName, productDescription, stateCode, saleCode } =
                    productMaster;

                const handle = {
                    ...product._doc,
                    productName,
                    productDescription,
                    stateCode,
                    saleCode,
                };

                listProducts.push(handle);
            }

            // const test = temp.map(async (product) => {
            //     const productMaster = await ProductMaster.findOne({
            //         _id: product.productMasterId,
            //     });
            //     const { productName, productDescription } = productMaster;
            //     const handle = {
            //         ...product._doc,
            //         productName,
            //         productDescription,
            //     };

            //     console.log(handle);
            //     return handle;
            //     return productMaster;
            // });

            await res.status(200).json({ totalProducts, listProducts });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    test: async (req, res) => {
        try {
            const queryObject = { ...req.query };
            // console.log(queryObject);

            const selectedField = [
                'gender',
                'categories',
                'collections',
                'colors',
                'sizes',
            ];

            const newQueryObject = {};
            for (const key of selectedField) {
                if (queryObject[key]) {
                    newQueryObject[key] = queryObject[key].split(',');
                }
            }
            // console.log(newQueryObject);

            const listProducts = [];
            const listProductsTemp = await Product.find();

            for (const product of listProductsTemp) {
                const productMaster = await ProductMaster.findOne({
                    _id: product.productMasterId,
                })
                    .populate({
                        path: 'vCollection',
                        select: 'collectName -collectCode',
                    })
                    .populate({
                        path: 'vCategory',
                        select: 'cateName -cateCode',
                    })
                    .populate({
                        path: 'vMaterial',
                        select: 'materialName -materialCode',
                    });

                const {
                    productName,
                    productDescription,
                    vCategory,
                    vCollection,
                    gender,
                } = productMaster;

                const categories = vCategory[0].cateName;
                const collections = vCollection[0].collectName;

                const handle = {
                    ...product._doc,
                    productName,
                    productDescription,
                    categories,
                    collections,
                    gender,
                };

                listProducts.push(handle);
            }

            const checkFilter = (product) => {
                let isPassed = true;
                for (const key in newQueryObject) {
                    if (key === 'gender') {
                        if (
                            !newQueryObject[key].includes(product[key]) &&
                            product[key] !== 'Unisex'
                        ) {
                            isPassed = false;
                        }
                    } else if (key === 'categories' || key === 'collections') {
                        if (!newQueryObject[key].includes(product[key])) {
                            isPassed = false;
                        }
                    } else if (key === 'colors') {
                        if (
                            !newQueryObject[key].includes(
                                product.color.valueColor
                            )
                        ) {
                            isPassed = false;
                        }
                    } else if (key === 'sizes') {
                        const check = product.color.details.find((item) =>
                            newQueryObject[key].includes(item.size.toString())
                        );
                        if (!check) isPassed = false;
                    }
                }
                return isPassed;
            };

            // Lọc sản phẩm
            const filter = listProducts.filter((product) =>
                checkFilter(product)
            );

            // Số lượng sản phẩm phù hợp với bộ lọc
            const totalProducts = filter.length;

            // Sắp xếp
            const { sort } = queryObject;
            filter.sort((a, b) => {
                if (sort === 'popular') {
                } else if (sort === 'most-new') {
                    const temp1 = a.createdAt.getTime();
                    const temp2 = b.createdAt.getTime();

                    if (temp1 - temp2 > 0) {
                        return -1;
                    }

                    if (temp1 - temp2 < 0) {
                        return 1;
                    }

                    return 0;
                } else if (sort === 'price-low-high') {
                    let temp1 = Number(a.price);
                    let temp2 = Number(b.price);

                    if (Number(a.newPrice) !== 0) {
                        temp1 = Number(a.newPrice);
                    }

                    if (Number(b.newPrice) !== 0) {
                        temp2 = Number(b.newPrice);
                    }

                    if (temp1 - temp2 > 0) {
                        return 1;
                    }

                    if (temp1 - temp2 < 0) {
                        return -1;
                    }

                    return 0;
                } else if (sort === 'price-high-low') {
                    let temp1 = Number(a.price);
                    let temp2 = Number(b.price);

                    if (Number(a.newPrice) !== 0) {
                        temp1 = Number(a.newPrice);
                    }

                    if (Number(b.newPrice) !== 0) {
                        temp2 = Number(b.newPrice);
                    }

                    if (temp1 - temp2 > 0) {
                        return -1;
                    }

                    if (temp1 - temp2 < 0) {
                        return 1;
                    }

                    return 0;
                }
            });

            // Phân trang
            const { pageSize, pageIndex } = queryObject;
            const start = pageSize * (pageIndex - 1);
            const end = pageSize * (pageIndex - 1) + pageSize;

            const data = filter.slice(start, end);

            await res.status(200).json({ totalProducts, listProducts: data });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    getProductById: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);

            const { color, ...othersProduct } = product._doc;

            const products = await Product.find({
                productMasterId: product.productMasterId,
            });

            const productChildren = products
                .filter((item) => item.color.valueColor !== color.valueColor)
                .map((item) => {
                    return { id: item._id, ...item.color };
                });

            const productMaster = await ProductMaster.findById(
                product.productMasterId
            );

            const { productName, productDescription, collectCode } =
                productMaster;

            res.status(200).json({
                ...othersProduct,
                colors: [color, ...productChildren],
                productName,
                productDescription,
                collectCode,
            });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    getProductByDate: async (req, res) => {
        try {
            const products = await Product.find({
                createdAt: { $gte: req.body.fromDate, $lte: req.body.toDate },
            });

            res.status(200).json({ products });
        } catch (err) {
            res.status(500).json({ err });
        }
    },
    getRelatedProducts: async (req, res) => {
        try {
            const { id } = req.body;

            const productsMaster = await ProductMaster.find({
                collectCode: req.params.collectCode,
            });

            const idProductsMaster = productsMaster.map((item) => item._id);

            const listRelatedProducts = [];
            for (const idMaster of idProductsMaster) {
                const products = await Product.find({
                    productMasterId: idMaster,
                });

                for (const product of products) {
                    if (product._id.toString() !== id)
                        listRelatedProducts.push(product);
                }

                // listRelatedProducts.push(...products);

                // products.map((item) => {
                //     if (item._id !== id) listRelatedProducts.push(item);
                // });
            }

            // const listRelatedProducts = products.filter(
            //     (item) => item._id !== id
            // );

            res.status(200).json({
                listRelatedProducts,
            });
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
                .populate({ path: 'vState', select: 'stateName -stateCode' })
                .populate({
                    path: 'vMaterial',
                    select: 'materialName -materialCode',
                });
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
    getColors: async (req, res) => {
        try {
            const colors = await Product.find({}, { color: 1 });
            res.status(200).json({ colors });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
};

module.exports = productCtrl;
