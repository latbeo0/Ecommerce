const router = require('express').Router();
const orderCtrl = require('../controllers/orderCtrl');
const { verifyTokenAndAuthorization } = require('../middleware/verifyToken');

router.post('/payment', orderCtrl.payment);

router.get('/find/:id', verifyTokenAndAuthorization, orderCtrl.getUserOrders);

router.post('/search', orderCtrl.getOrder);

module.exports = router;
