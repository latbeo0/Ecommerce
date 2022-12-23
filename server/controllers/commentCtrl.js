const Comment = require('../models/commentModel');

const CommentCtrl = {
    getAllComment: async (req, res) => {
        try {
            const comments = await Comment.find();

            res.status(200).json({ listComments: comments });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    comment: async (req, res) => {
        try {
            const { userId, productId, rating, comment, orderCode } = req.body;

            const newComment = new Comment({
                userId,
                productId,
                rating,
                comment,
                orderCode,
            });

            await newComment.save();

            res.status(200).json({ msg: 'Comment successful' });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    getComment: async (req, res) => {
        try {
            const { userId, productId, orderCode } = req.body;

            const comment = await Comment.findOne({
                userId,
                productId,
                orderCode,
            });

            res.status(200).json({ comment });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
};

module.exports = CommentCtrl;
