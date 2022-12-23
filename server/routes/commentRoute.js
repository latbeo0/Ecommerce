const router = require('express').Router();
const commentCtrl = require('../controllers/commentCtrl');
const { verifyTokenAndAuthorization } = require('../middleware/verifyToken');

router.post(
    '/:productId/:id',
    verifyTokenAndAuthorization,
    commentCtrl.comment
);

router.post('/get_comment', commentCtrl.getComment);

module.exports = router;
