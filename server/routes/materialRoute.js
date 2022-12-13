const router = require("express").Router();
const materialCtrl = require("../controllers/materialCtrl");
const {
  verifyTokenAndAdmin,
  verifyTokenAndSalePerson,
} = require("../middleware/verifyToken");

router.get("/", materialCtrl.getAllMaterial);
router.post("/", verifyTokenAndAdmin, materialCtrl.createMaterial);
router.put("/:id", verifyTokenAndAdmin, materialCtrl.updateMaterial);

module.exports = router;
