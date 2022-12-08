const router = require("express").Router();
const collectionCtrl = require("../controllers/collectionCtrl");
// const { verifyTokenAndAdmin } = require('../middleware/verifyToken');

// CREATE
router.post("/", collectionCtrl.createCollection);

// UPDATE
router.put("/:id", collectionCtrl.updateCollection);

// GET ALL
router.get("/", collectionCtrl.getAllCollection);
// GET PRODUCT BY NAME

module.exports = router;
