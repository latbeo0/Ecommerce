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

export const fetchPaymentVnPay = async (
    amount,
    bankCode,
    orderDescription,
    orderType,
    language
) => {
    return await baseRequest.post('/api/order/create_payment_url', {
        amount,
        bankCode,
        orderDescription,
        orderType,
        language,
    });
};

export const fetchPaymentVnPayReturn = async (url) => {
    return await baseRequest.get(`/api/order/vnpay_return${url}`, null);
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
export const fetchApproveOrder = async (id, token) => {
    try {
        return await baseRequest.put(`/api/order/approve${id}`, null, {
            headers: { Authorization: token },
        });
    } catch (err) {
        throw err;
    }
};
export const fetchGetAllOrderById = async (id, token) => {
    try {
        return await baseRequest.get(`/api/order/find${id}`, {
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

export const fetchClearOrder = createAsyncThunk(
    'order/fetchClearOrder',
    async (args) => {
        try {
        } catch (error) {
            throw new Error(error.response.data.msg);
        }
    }
);

export const fetchOrderByCode = async (orderCode) => {
    try {
        return await baseRequest.post('/api/order/search/code', {
            orderCode,
        });
    } catch (error) {
        throw new Error(error.response.data.msg);
    }
};

export const fetchRollBack = async (orderCode, listOderItems) => {
    try {
        return await baseRequest.post('/api/order/rollback', {
            orderCode,
            listOderItems,
        });
    } catch (error) {
        throw new Error(error.response.data.msg);
    }
};
