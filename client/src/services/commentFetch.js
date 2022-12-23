import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseRequest } from './apiFetch';

export const fetchComment = async (
    token,
    userId,
    productId,
    orderCode,
    rating,
    comment
) => {
    try {
        return await baseRequest.post(
            `/api/comment/${productId}/${userId}`,
            {
                userId,
                productId,
                orderCode,
                rating,
                comment,
            },
            {
                headers: { Authorization: token },
            }
        );
    } catch (err) {
        console.log(err);
    }
};

export const fetchGetComment = async (userId, productId, orderCode) => {
    try {
        return await baseRequest.post(`/api/comment/get_comment`, {
            userId,
            productId,
            orderCode,
        });
    } catch (err) {
        console.log(err);
    }
};
