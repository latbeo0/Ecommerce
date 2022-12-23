const router = require('express').Router();
const saleCtrl = require('../controllers/saleCtrl');
const { verifyTokenAndManager, verifyTokenAndSalePerson } = require('../middleware/verifyToken');

// CREATE
router.post('/', verifyTokenAndManager, saleCtrl.createSaleVoucher);

// UPDATE
router.put('/:id', verifyTokenAndManager, saleCtrl.updateSaleVoucher);

// GET ALL VOUCHER
router.get('/', saleCtrl.getAllSaleVoucher);
// GET PRODUCT BY NAME

module.exports = router;
