import { baseRequest } from './apiFetch';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGetAllSizes = createAsyncThunk(
    'size/fetchGetAllSizes',
    async () => {
        try {
            const res = await baseRequest.get('/api/product/colors/', null);

            const tempArr = res?.data?.colors.reduce((prev, cur) => {
                const temp = cur.color.details.flat();

                return [...prev, ...temp];
            }, []);

            const data = tempArr.reduce((prev, cur) => {
                const check = prev.find((item) => item === cur.size);

                if (!check) {
                    return [...prev, cur.size];
                }

                return [...prev];
            }, []);

            return data.sort();
        } catch (error) {
            // if (!error.response) throw error;
            throw new Error(error.response.data.msg);
        }
    }
);
