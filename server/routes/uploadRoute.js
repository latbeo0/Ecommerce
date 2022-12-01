const router = require("express").Router();
const uploadImage = require("../middleware/uploadImage");
const uploadCtrl = require("../controllers/uploadCtrl");
const {
    verifyToken,
    verifyTokenAndAdmin,
} = require("../middleware/verifyToken");

router.post(
    "/upload_avatar",
    verifyToken,
    uploadImage,
    uploadCtrl.uploadAvatar
);

router.post(
    "/upload_product",
    // verifyTokenAndAdmin,
    uploadImage,
    uploadCtrl.uploadProduct
);

module.exports = router;
