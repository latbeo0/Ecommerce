const router = require('express').Router();
const saleCtrl = require('../controllers/saleCtrl');
// const { verifyTokenAndAdmin } = require('../middleware/verifyToken');

// CREATE
router.post('/', saleCtrl.createSaleVoucher);

// UPDATE
router.put('/:id', saleCtrl.updateSaleVoucher);

// GET ALL VOUCHER
router.get('/', saleCtrl.getAllSaleVoucher);
// GET PRODUCT BY NAME

module.exports = router;
