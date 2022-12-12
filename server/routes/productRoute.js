const router = require('express').Router();
const productCtrl = require('../controllers/productCtrl');
// const { verifyTokenAndAdmin } = require('../middleware/verifyToken');

// CREATE
router.post('/', productCtrl.createProduct);

router.post('/master', productCtrl.createProductMaster);

// UPDATE
router.put('/:id', productCtrl.updateProduct);
router.put('/master/:id', productCtrl.updateProductMaster);

// DELETE
router.delete('/:id', productCtrl.deleteProduct);

// GET PRODUCT
router.get('/find/:id', productCtrl.getProductById);
router.get('/find-master/:id', productCtrl.getProductByIdMaster);
router.get('/find/master/:id', productCtrl.getProductMasterById);
router.post('/find/collection/:collectCode', productCtrl.getRelatedProducts);

// GET ALL PRODUCT
router.get('/', productCtrl.getAllProduct);
router.get('/master', productCtrl.getAllProductMaster);
router.get('/test', productCtrl.test);

// GET PRODUCT BY NAME
router.get('/search/:name', productCtrl.getProductByName);

// GET ALL COLORS
router.get('/colors/', productCtrl.getColors);

module.exports = router;
