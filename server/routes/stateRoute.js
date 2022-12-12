const router = require('express').Router();
const stateCtrl = require('../controllers/stateCtrl');
const { verifyTokenAndAdmin,  verifyTokenAndSalePerson} = require('../middleware/verifyToken');

router.post('/', verifyTokenAndSalePerson, stateCtrl.createstate);

router.put('/:id', verifyTokenAndAdmin, stateCtrl.updatestate);

router.get('/', stateCtrl.getAllstate);

module.exports = router;
