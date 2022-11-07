const router = require('express').Router();
const userCtrl = require('../controllers/userCtrl');
const {
    verifyTokenRefreshToken,
    verifyToken,
} = require('../middleware/verifyToken');

router.get('/', userCtrl.getAllUser);

router.post('/refresh_token', verifyTokenRefreshToken, userCtrl.getAccessToken);

router.post('/forgot_password', userCtrl.forgotPassword);

router.post('/reset_password', verifyToken, userCtrl.resetPassword);

router.get('/logout', userCtrl.logout);

//Admin
router.post('/', userCtrl.createUser);

module.exports = router;
