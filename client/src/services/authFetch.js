import { baseRequest } from './apiFetch';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRegister = async (email, password) => {
    try {
        return await baseRequest.post('/api/auth/register', {
            email,
            password,
        });
    } catch (error) {
        throw error;
    }
};

export const fetchActiveEmail = async (activation_token) => {
    try {
        return await baseRequest.post('/api/auth/activation', {
            activation_token,
        });
    } catch (error) {
        throw error;
    }
};

// export const fetchLogin = async (email, password) => {
//     try {
//         return await baseRequest.post('/api/auth/login', {
//             email,
//             password,
//         });
//     } catch (error) {
//         throw error;
//     }
// };

export const fetchLogin = createAsyncThunk(
    'auth/fetchLogin',
    async (valuesForm) => {
        const { email, password } = valuesForm;
        try {
            await baseRequest.post('/api/auth/login', {
                email,
                password,
            });
        } catch (error) {
            // if (!error.response) throw error;
            throw new Error(error.response.data.msg);
        }
    }
);
