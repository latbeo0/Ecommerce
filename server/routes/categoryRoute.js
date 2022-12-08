const router = require("express").Router();
const categoryCtrl = require("../controllers/categoryCtrl");
const {
  verifyTokenAndAdmin,
  verifyTokenAndSalePerson,
} = require("../middleware/verifyToken");

router.get("/", categoryCtrl.getAllCategory);
router.post("/", verifyTokenAndAdmin, categoryCtrl.createCategory);
router.put("/:id", verifyTokenAndAdmin, categoryCtrl.updateCategory);

module.exports = router;
