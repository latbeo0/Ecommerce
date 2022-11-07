const Users = require("../models/userModel");
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

            // res.status(200).json({
            //     id: _id,
            //     access_token,
            // });

            const getFullName = (firstName, lastName) => {
                if (firstName && lastName) {
                    return `${firstName} ${lastName}`;
                }

                if (firstName) return firstName;
                if (lastName) return lastName;

                return "New User";
            };

            const fullName = getFullName(docs.firstName, docs.lastName);

            res.status(200).json({
                ...docs,
                fullName,
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
