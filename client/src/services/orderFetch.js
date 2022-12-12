import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseRequest } from './apiFetch';

export const fetchPayment = async (
    orderCode,
    listOderItems,
    addressShipping,
    subPrice,
    totalPrice,
    userId,
    payment
) => {
    return await baseRequest.post('/api/order/payment', {
        orderCode,
        listOderItems,
        addressShipping,
        subPrice,
        totalPrice,
        userId,
        payment,
    });
};
export const fetchGetOrderByDate = async (filter, token) => {
    try {
        return await baseRequest.post('/api/order/find-by-date', filter, {
            headers: { Authorization: token },
        });
    } catch (err) {
        throw err;
    }
};
export const fetchGetAllOrder = async (token) => {
    try {
        return await baseRequest.get('/api/order/find-all', {
            headers: { Authorization: token },
        });
    } catch (err) {
        throw err;
    }
};

export const fetchGetAllOrder1 = createAsyncThunk(
    'order/fetchGetOrders',
    async (args) => {
        try {
            const { user } = args;

            if (user) {
                const res = await baseRequest.get(
                    `/api/order/find/${user._id}`,
                    {
                        headers: { Authorization: user.access_token },
                    }
                );

                return res.data.orders;
            }

            // return { product, size, count, isSelected: true, isError: false };
        } catch (error) {
            throw new Error(error.response.data.msg);
        }
    }
);
