const router = require('express').Router();
const authCtrl = require('../controllers/authCtrl');
const { verifyTokenActivation } = require('../middleware/verifyToken');
const passport = require('passport');

const { CLIENT_URL } = process.env;

router.post('/register', authCtrl.register);

router.post('/activation', verifyTokenActivation, authCtrl.activateEmail);

router.post('/login', authCtrl.login);

router.get('/login/success', authCtrl.loginGoogle);

router.get('/login/failed', (req, res) => {
    res.status(401).json({
        success: false,
        message: 'failure',
    });
});

router.get(
    '/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
    '/google/callback',
    passport.authenticate('google', {
        successRedirect: `${CLIENT_URL}/login_google`,
        failureRedirect: '/login/failed',
    })
);

router.get(
    '/facebook',
    passport.authenticate('facebook', { scope: ['profile', 'email'] })
);

router.get(
    '/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: CLIENT_URL,
        failureRedirect: '/login/failed',
    })
);

module.exports = router;
