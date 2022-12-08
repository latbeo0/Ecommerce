const router = require("express").Router();
const categoryCtrl = require("../controllers/categoryCtrl");
// const { verifyTokenAndAdmin } = require('../middleware/verifyToken');
router.get("/code", categoryCtrl.getCategoryCode);

router.get("/", categoryCtrl.getAllCategory);

router.post("/", categoryCtrl.createCategory);

router.put("/:id", categoryCtrl.updateCategory);

module.exports = router;
