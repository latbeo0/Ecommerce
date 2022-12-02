const Users = require("../models/userModel");
const Product = require("../models/productModel");
const sendMail = require("./sendMail");
const { createAccessToken } = require("./createToken");
const CryptoJS = require("crypto-js");

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
            const listProducts = [];
            for (const productId of user.favoriteProductID) {
                const product = await Product.findOne({ _id: productId });
                if (product) {
                    listProducts.push(product);
                }
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
