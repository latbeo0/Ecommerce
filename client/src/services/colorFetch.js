import { baseRequest } from './apiFetch';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGetAllColors = createAsyncThunk(
    'color/fetchGetAllColors',
    async () => {
        try {
            const res = await baseRequest.get('/api/product/colors/', null);

            // const data = res?.data?.colors.map((item) => ({
            //     id: item._id,
            //     name: item.color.nameColor,
            //     value: item.color.valueColor,
            // }));

            const data = res?.data?.colors.reduce((prev, cur) => {
                const check = prev.find(
                    (item) => item.value === cur.color.valueColor
                );

                if (!check) {
                    return [
                        ...prev,
                        {
                            id: cur._id,
                            name: cur.color.nameColor,
                            value: cur.color.valueColor,
                        },
                    ];
                }

                return [...prev];
            }, []);

            const tempArr = res?.data?.colors.reduce((prev, cur) => {
                // const check = prev.find(
                //     (item) => item.value === cur.color.valueColor
                // );

                // if (!check) {
                //     return [
                //         ...prev,
                //         {
                //             id: cur._id,
                //             name: cur.color.nameColor,
                //             value: cur.color.valueColor,
                //         },
                //     ];
                // }

                // return [...prev];
                const temp = cur.color.details.flat();

                return [...prev, ...temp];

                // console.log(arr);
            }, []);

            const sizes = tempArr.reduce((prev, cur) => {
                const check = prev.find((item) => item.size === cur.size);

                if (!check) {
                    return [...prev, cur.size];
                }

                return [...prev];
            }, []);

            return data;
        } catch (error) {
            // if (!error.response) throw error;
            throw new Error(error.response.data.msg);
        }
    }
);
