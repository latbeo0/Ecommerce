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

router.post("/address_shipping", verifyToken, userCtrl.addAddressShipping);

router.put(
    "/address_shipping/:id",
    verifyToken,
    userCtrl.changeDefaultAddressShipping
);

router.delete(
    "/address_shipping/:id",
    verifyToken,
    userCtrl.deleteAddressShipping
);

router.post("/cart", verifyToken, userCtrl.addToCart);

router.get("/cart", verifyToken, userCtrl.getCart);

router.delete("/cart", verifyToken, userCtrl.clearCart);

router.post("/cart/item", verifyToken, userCtrl.removeItemCart);

router.post("/cart/increase", verifyToken, userCtrl.increaseQuantity);

router.post("/cart/decrease", verifyToken, userCtrl.decreaseQuantity);

router.put("/cart/select", verifyToken, userCtrl.selectItemCart);

router.put("/cart/selectAll", verifyToken, userCtrl.selectAllItemCart);

router.put("/cart/unselectAll", verifyToken, userCtrl.unselectAllItemCart);

//Admin
router.post("/", userCtrl.createUser);

module.exports = router;
