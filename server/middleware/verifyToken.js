const jwt = require("jsonwebtoken");

const verifyTokenActivation = (req, res, next) => {
    try {
        const { activation_token } = req.body;
        jwt.verify(
            activation_token,
            process.env.ACTIVATION_TOKEN_SECRET,
            (err, user) => {
                if (err) {
                    res.status(403).json({ msg: "Token is not valid!" });
                } else {
                    req.user = user;
                    next();
                }
            }
        );
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};

const verifyTokenRefreshToken = (req, res, next) => {
    try {
        const rf_token = req.cookies.refresh_token;

        if (!rf_token)
            return res.status(400).json({ msg: "Please login now!" });

        jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
            if (err) {
                res.status(403).json("Token is not valid!");
            } else {
                req.user = user;
                next();
            }
        });
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
};

const verifyToken = (req, res, next) => {
    try {
        const token = req.header("Authorization");

        if (!token)
            return res.status(401).json({ msg: "Invalid Authentication." });

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err)
                return res.status(403).json({ msg: "Token Is Not Valid!" });

            req.user = user;
            next();
        });
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
};

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("You are not allowed to do that!");
        }
    });
};

const verifyTokenAndAdmin = (req, res, next) => {
    try {
        verifyToken(req, res, () => {
            if (req.user.isAdmin) {
                next();
            } else {
                return res
                    .status(403)
                    .json({ msg: "You are not allowed to do that!" });
            }
        });
    } catch (error) {
        return res.status(500).json({ msg: err.message });
    }
};

module.exports = {
    verifyTokenActivation,
    verifyTokenRefreshToken,
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
};
