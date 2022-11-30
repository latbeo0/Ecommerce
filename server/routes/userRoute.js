const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");
const {
    verifyTokenRefreshToken,
    verifyTokenAndAuthorization,
    verifyToken,
} = require("../middleware/verifyToken");

router.get("/", userCtrl.getAllUser);

router.post("/refresh_token", verifyTokenRefreshToken, userCtrl.getAccessToken);

router.post("/forgot_password", userCtrl.forgotPassword);

router.post("/reset_password", verifyToken, userCtrl.resetPassword);

router.get("/logout", userCtrl.logout);

router.get("/find/:id", verifyTokenAndAuthorization, userCtrl.getUserById);

router.put(
    "/find/:id/userInfo",
    verifyTokenAndAuthorization,
    userCtrl.updateUserInfoById
);

router.get(
    "/wish_list/:id",
    verifyTokenAndAuthorization,
    userCtrl.getAllWishList
);

router.post("/wish_list", verifyToken, userCtrl.wishList);

router.delete(
    "/wish_list/:id",
    verifyTokenAndAuthorization,
    userCtrl.clearWishList
);

//Admin
router.post("/", userCtrl.createUser);

module.exports = router;
