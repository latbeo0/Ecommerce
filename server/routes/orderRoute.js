const router = require("express").Router();
const orderCtrl = require("../controllers/orderCtrl");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndSalePerson,
} = require("../middleware/verifyToken");

router.post("/payment", orderCtrl.payment);

router.get("/find/:id", verifyTokenAndAuthorization, orderCtrl.getUserOrders);

router.post("/search", orderCtrl.getOrder);

//Admin

router.get("/find-all", verifyTokenAndSalePerson, orderCtrl.getAllOrder);

router.post(
  "/find-by-date",
  verifyTokenAndSalePerson,
  orderCtrl.getOrderByDate
);

module.exports = router;
