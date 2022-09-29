const router = require('express').Router();
const productCtrl = require('../controllers/productCtrl');
// const { verifyTokenAndAdmin } = require('../middleware/verifyToken');

// CREATE
router.post('/', productCtrl.createProduct);

// UPDATE
router.put('/:id', productCtrl.updateProduct);

// DELETE
router.delete('/:id', productCtrl.deleteProduct);

// GET PRODUCT
router.get('/find/:id', productCtrl.getProductById);
// GET ALL PRODUCT
router.get('/', productCtrl.getAllProduct);
// GET PRODUCT BY NAME
router.get('/search/:name', productCtrl.getProductByName);

module.exports = router;
