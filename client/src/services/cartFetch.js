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
            return { product, size, count, isSelected: true, isError: false };
        } catch (error) {
            throw new Error(error.response.data.msg);
        }
    }
);

export const fetchIncreaseNumber = createAsyncThunk(
    'cart/fetchIncreaseNumber',
    async (args) => {
        try {
            const { product } = args;
            return { product };
        } catch (error) {
            throw new Error(error.response.data.msg);
        }
    }
);

export const fetchDecreaseNumber = createAsyncThunk(
    'cart/fetchDecreaseNumber',
    async (args) => {
        try {
            const { product } = args;
            return { product };
        } catch (error) {
            throw new Error(error.response.data.msg);
        }
    }
);

export const fetchRemoveItem = createAsyncThunk(
    'cart/fetchRemoveItem',
    async (args) => {
        try {
            const { product } = args;
            return { product };
        } catch (error) {
            throw new Error(error.response.data.msg);
        }
    }
);

export const fetchSelectItem = createAsyncThunk(
    'cart/fetchSelectItem',
    async (args) => {
        try {
            const { product } = args;
            return { product };
        } catch (error) {
            throw new Error(error.response.data.msg);
        }
    }
);

export const fetchUnSelectAllItem = createAsyncThunk(
    'cart/fetchUnSelectAllItem',
    async (args) => {
        try {
        } catch (error) {
            throw new Error(error.response.data.msg);
        }
    }
);

export const fetchSelectAllItem = createAsyncThunk(
    'cart/fetchSelectAllItem',
    async (args) => {
        try {
        } catch (error) {
            throw new Error(error.response.data.msg);
        }
    }
);

export const fetchClearCart = createAsyncThunk(
    'cart/fetchClearCart',
    async (args) => {
        try {
        } catch (error) {
            throw new Error(error.response.data.msg);
        }
    }
);
