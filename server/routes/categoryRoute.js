const router = require('express').Router();
const categoryCtrl = require('../controllers/categoryCtrl');
// const { verifyTokenAndAdmin } = require('../middleware/verifyToken');

router.post('/', categoryCtrl.createCategory);

router.put('/:id', categoryCtrl.updateCategory);

router.get('/', categoryCtrl.getAllCategory);


module.exports = router;
