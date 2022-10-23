import { baseRequest } from './apiFetch';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchGetAccessToken = async () => {
//     return await baseRequest.post('/api/user/refresh_token', null);
// };

export const fetchGetAccessToken = createAsyncThunk(
    'user/getAccessToken',
    async () => {
        try {
            const res = await baseRequest.post('/api/user/refresh_token', null);
            return res.data;
        } catch (error) {
            throw new Error(error.response.data.msg);
        }
    }
);

export const fetchForgotPassword = async (email) => {
    return await baseRequest.post('/api/user/forgot', { email });
};

export const fetchResetPassword = async (password, token) => {
    return await baseRequest.post(
        '/api/user/reset',
        { password },
        {
            headers: { Authorization: token },
        }
    );
};

// export const fetchLogout = async () => {
//     return await baseRequest.get('/api/user/logout', null);
// };

export const fetchLogout = createAsyncThunk('user/logout', async () => {
    try {
        await baseRequest.get('/api/user/logout', null);
    } catch (error) {
        throw new Error(error.response.data.msg);
    }
});
