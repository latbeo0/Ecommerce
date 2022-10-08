import { baseRequest } from './apiFetch';

export const fetchGetAccessToken = async () => {
    return await baseRequest.post('/api/user/refresh_token', null);
};

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

export const fetchLogout = async () => {
    return await baseRequest.get('/api/user/logout', null);
};
