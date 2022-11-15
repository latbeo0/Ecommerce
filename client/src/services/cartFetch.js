import { baseRequest } from './apiFetch';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAddToCart = createAsyncThunk(
    'cart/addToCart',
    async (args) => {
        try {
            // const res = await baseRequest.post('/api/user/refresh_token', null);
            // return res.data;
            // console.log(args);
            const { user, product, size, count } = args;
            return { product, size, count };
        } catch (error) {
            throw new Error(error.response.data.msg);
        }
    }
);
