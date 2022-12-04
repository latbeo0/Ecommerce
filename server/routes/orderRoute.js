const router = require('express').Router();
const orderCtrl = require('../controllers/orderCtrl');
const { verifyTokenAndAuthorization } = require('../middleware/verifyToken');

router.post('/payment', orderCtrl.payment);

router.get('/find/:id', verifyTokenAndAuthorization, orderCtrl.getUserOrders);

router.post('/search', orderCtrl.getOrder);

router.get('/find-all', orderCtrl.getAllOrder);

router.get('/find-by-date', orderCtrl.getOrderByDate);



module.exports = router;
