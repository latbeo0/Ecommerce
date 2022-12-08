const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");
const {
  verifyTokenRefreshToken,
  verifyTokenAndAuthorization,
  verifyTokenAndSalePerson,
  verifyTokenAndAdmin,
  verifyToken,
} = require("../middleware/verifyToken");

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

//Admin
router.get(
  "/",
  verifyTokenAndSalePerson,
  userCtrl.getAllUser
);
router.post("/create-new", verifyTokenAndAdmin, userCtrl.createUser);
router.put("/update/:id", verifyTokenAndAdmin, userCtrl.updateUserById);
router.delete("/delete/:id", verifyTokenAndAdmin, userCtrl.deleteUserById);

module.exports = router;
