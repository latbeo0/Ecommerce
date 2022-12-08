const router = require("express").Router();
const stateCtrl = require("../controllers/stateCtrl");
// const { verifyTokenAndAdmin } = require('../middleware/verifyToken');

// router.post('/', stateCtrl.createstate);

// router.put('/:id', stateCtrl.updatestate);

router.get("/", stateCtrl.getAllstate);

module.exports = router;
