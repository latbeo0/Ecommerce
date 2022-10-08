const router = require('express').Router();
const authCtrl = require('../controllers/authCtrl');
const { verifyTokenActivation } = require('../middleware/verifyToken');

router.post('/register', authCtrl.register);

router.post('/activation', verifyTokenActivation, authCtrl.activateEmail);

router.post('/login', authCtrl.login);

module.exports = router;
