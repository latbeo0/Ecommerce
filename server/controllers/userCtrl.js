const Users = require("../models/userModel");
const Product = require("../models/productModel");
const AddressShipping = require("../models/addressShippingModel");
const sendMail = require("./sendMail");
const { createAccessToken } = require("./createToken");
const CryptoJS = require("crypto-js");
const productMasterModel = require("../models/productMasterModel");

const { CLIENT_URL } = process.env;

const userCtrl = {
    getAccessToken: async (req, res) => {
        try {
            const user = req.user;

            const info = await Users.findOne({ _id: user.id });

            const { password, createdAt, updatedAt, __v, ...docs } = info._doc;

            const access_token = createAccessToken({
                id: user.id,
            });

            res.status(200).json({
                ...docs,
                access_token,
            });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    forgotPassword: async (req, res) => {
        try {
            const { email } = req.body;
            const user = await Users.findOne({ email });
            if (!user)
                return res
                    .status(400)
                    .json({ msg: "This email does not exist." });

            const access_token = createAccessToken({ id: user._id });
            const url = `${CLIENT_URL}/reset_password/${access_token}`;

            sendMail(email, url, "Reset your password");
            res.json({ msg: "Re-send the password, please check your email." });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    resetPassword: async (req, res) => {
        try {
            const { password } = req.body;

            const passwordHash = CryptoJS.AES.encrypt(
                password,
                process.env.PASS_SEC
            ).toString();

            await Users.findOneAndUpdate(
                { _id: req.user.id },
                {
                    password: passwordHash,
                }
            );
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    forgotPassword: async (req, res) => {
        try {
            const { email } = req.body;

            const user = await Users.findOne({ email });

            if (!user)
                return res
                    .status(400)
                    .json({ msg: "This email does not exist." });

            res.json({ msg: "Password successfully changed!" });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    logout: async (req, res) => {
        try {
            res.clearCookie("refresh_token", {
                path: "/api/user/refresh_token",
            });

            return res.status(200).json({ msg: "Logout Successful!" });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    getUserById: async (req, res) => {
        try {
            const user = await Users.findOne({ _id: req.user.id });
            return res.status(200).json({ user });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    updateUserInfoById: async (req, res) => {
        try {
            await Users.findOneAndUpdate(
                { _id: req.user.id },
                {
                    $set: req.body,
                }
            );

            res.status(200).json({ msg: "Update Successful!" });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    getAllWishList: async (req, res) => {
        try {
            const user = await Users.findOne({ _id: req.user.id });
            const listProductsTemp = [];
            for (const productId of user.favoriteProductID) {
                const product = await Product.findOne({ _id: productId });
                if (product) {
                    listProductsTemp.push(product);
                }
            }
            const listProducts = [];
            for (const product of listProductsTemp) {
                const productMaster = await productMasterModel.findOne({
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

            return res.status(200).json({ listProducts });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    wishList: async (req, res) => {
        try {
            const { productId, type } = req.body;

            if (type === 0) {
                await Users.findOneAndUpdate(
                    { _id: req.user.id },
                    { $push: { favoriteProductID: productId } }
                );
                return res
                    .status(200)
                    .json({ msg: "Add To Wishlist Successful!" });
            } else {
                await Users.findOneAndUpdate(
                    { _id: req.user.id },
                    { $pull: { favoriteProductID: productId } }
                );
                return res
                    .status(200)
                    .json({ msg: "Remove To Wishlist Successful!" });
            }
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    clearWishList: async (req, res) => {
        try {
            await Users.findOneAndUpdate(
                { _id: req.user.id },
                { $set: { favoriteProductID: [] } }
            );
            return res.status(200).json({ msg: "Clear Wishlist Successful!" });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    // Add new address shipping
    addAddressShipping: async (req, res) => {
        try {
            const { province, district, ward, address } = req.body;
            const user = req.user;

            const newAddress = new AddressShipping({
                province,
                district,
                ward,
                address,
            });

            const { _id, ...data } = newAddress._doc;

            const userAddress = {
                id: _id.toString(),
                ...data,
                isSelected: true,
            };

            await Users.updateMany(
                { _id: user.id },
                { $set: { "addressShipping.$[].isSelected": false } }
            );

            await Users.findOneAndUpdate(
                { _id: user.id },
                { $push: { addressShipping: userAddress } }
            );

            await res.status(200).json({ userAddress });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    changeDefaultAddressShipping: async (req, res) => {
        try {
            const { id } = req.params;
            const user = req.user;

            await Users.updateMany(
                { _id: user.id },
                { $set: { "addressShipping.$[].isSelected": false } }
            );

            await Users.findOneAndUpdate(
                { _id: user.id, "addressShipping.id": id },
                { $set: { "addressShipping.$.isSelected": true } }
            );

            return res
                .status(200)
                .json({ msg: "Change Default Address Shipping Successful!" });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    deleteAddressShipping: async (req, res) => {
        try {
            const { id } = req.params;
            const user = req.user;

            await Users.updateMany(
                { _id: user.id },
                { $pull: { addressShipping: { id: id } } }
            );

            return res
                .status(200)
                .json({ msg: "Delete Address Shipping Successful!" });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    //Admin
    getAllUser: async (req, res) => {
        try {
            let user;
            user = await Users.find().populate({
                path: "vRole",
                select: "roleName -roleCode",
            });
            res.status(200).json({ user });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    createUser: async (req, res) => {
        const newUser = new Users(req.body);
        // const user = await Users.findOne(newUser.email);
        // if (user)
        //   return res.status(400).json({ msg: "This email already exists." });

        const passwordHash = CryptoJS.AES.encrypt(
            newUser.password,
            process.env.PASS_SEC
        ).toString();

        newUser.password = passwordHash;

        try {
            await newUser.save();
            res.status(200).json({ msg: "User has been created" });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
};

module.exports = userCtrl;
