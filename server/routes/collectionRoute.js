const router = require('express').Router();
const collectionCtrl = require('../controllers/collectionCtrl');
const { verifyTokenAndAdmin, verifyTokenAndSalePerson } = require('../middleware/verifyToken');

// CREATE
router.post('/', verifyTokenAndAdmin, collectionCtrl.createCollection);

// UPDATE
router.put('/:id', verifyTokenAndAdmin, collectionCtrl.updateCollection);

// GET ALL
router.get("/", collectionCtrl.getAllCollection);
// GET PRODUCT BY NAME

module.exports = router;
