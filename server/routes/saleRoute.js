const router = require('express').Router();
const saleCtrl = require('../controllers/saleCtrl');
const { verifyTokenAndAdmin, verifyTokenAndSalePerson } = require('../middleware/verifyToken');

// CREATE
router.post('/', verifyTokenAndAdmin, saleCtrl.createSaleVoucher);

// UPDATE
router.put('/:id', verifyTokenAndAdmin, saleCtrl.updateSaleVoucher);

// GET ALL VOUCHER
router.get('/', saleCtrl.getAllSaleVoucher);
// GET PRODUCT BY NAME

module.exports = router;
