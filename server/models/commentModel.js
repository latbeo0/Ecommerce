const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        productId: { type: String, required: true },
        orderCode: { type: String, required: true },
        rating: { type: Number, required: true },
        comment: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('comments', CommentSchema);
