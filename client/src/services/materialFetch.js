import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseRequest } from './apiFetch';

export const fetchGetAllMaterial = async () => {
    try {
        return await baseRequest.get('/api/material/', null);
    } catch (err) {
        console.log(err);
    }
};
export const fetchAddNewMaterial = async (material, token) => {
    try {
        return await baseRequest.post('/api/material/', material, {
            headers: { Authorization: token },
        });
    } catch (err) {
        throw err;
    }
};

export const fetchUpdateMaterial = async (material, id, token) => {
    try {
        return await baseRequest.put(`/api/material/${id}`, material, {
            headers: { Authorization: token },
        });
    } catch (err) {
        throw err;
    }
};
export const fetchGetAllMaterial1 = createAsyncThunk(
    'material/fetchGetAllMaterial',
    async () => {
        try {
            const res = await baseRequest.get('/api/material/');
            return [...res.data.material];
        } catch (error) {
            // if (!error.response) throw error;
            throw new Error(error.response.data.msg);
        }
    }
);
