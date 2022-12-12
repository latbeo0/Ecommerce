const router = require('express').Router();
const productCtrl = require('../controllers/productCtrl');
const { verifyTokenAndAdmin,  verifyTokenAndManager, verifyTokenAndSalePerson} = require('../middleware/verifyToken');

// CREATE
router.post('/', verifyTokenAndManager, productCtrl.createProduct);

router.post('/master', verifyTokenAndManager, productCtrl.createProductMaster);

// UPDATE
router.put('/:id', verifyTokenAndManager, productCtrl.updateProduct);
router.put('/master/:id', verifyTokenAndManager, productCtrl.updateProductMaster);

// DELETE
router.delete('/:id', verifyTokenAndAdmin, productCtrl.deleteProduct);

// GET PRODUCT
router.get('/find/:id', productCtrl.getProductById);
router.get('/find-master/:id', productCtrl.getProductByIdMaster);
router.get('/find/master/:id',  productCtrl.getProductMasterById);
router.post('/find/collection/:collectCode',  productCtrl.getRelatedProducts);
router.post('/find-by-date', productCtrl.getProductByDate)
// GET ALL PRODUCT
router.get('/', productCtrl.getAllProduct);
router.get('/master', productCtrl.getAllProductMaster);

// GET PRODUCT BY NAME
router.get('/search/:name', productCtrl.getProductByName);

module.exports = router;
