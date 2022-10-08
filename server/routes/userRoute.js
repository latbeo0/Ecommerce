const router = require('express').Router();
const userCtrl = require('../controllers/userCtrl');
const {
    verifyTokenRefreshToken,
    verifyToken,
} = require('../middleware/verifyToken');

router.post('/refresh_token', verifyTokenRefreshToken, userCtrl.getAccessToken);

router.post('/forgot', userCtrl.forgotPassword);

router.post('/reset', verifyToken, userCtrl.resetPassword);

router.get('/logout', userCtrl.logout);

module.exports = router;
