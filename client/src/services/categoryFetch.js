import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseRequest } from "./apiFetch";
export const getCategoryCode = async () => {
    try {
        return await baseRequest.get("/api/category/code", null);
    } catch (err) {
        console.log(err);
    }
};
// export const fetchGetAllCategory = async () => {
//   try {
//     return await baseRequest.get("/api/category/", null);
//   } catch (err) {
//     console.log(err);
//   }
// };

export const fetchGetAllCategory = createAsyncThunk(
    "category/fetchGetAllCategory",
    async () => {
        try {
            const res = await baseRequest.get("/api/category/");
            return [...res.data.category];
        } catch (error) {
            // if (!error.response) throw error;
            throw new Error(error.response.data.msg);
        }
    }
);

export const fetchAddNewCategory = async (user, token) => {
    try {
        return await baseRequest.post("/api/category/", user);
    } catch (err) {
        throw err;
    }
};
export const fetchUpdateCategory = async (user, id, token) => {
    try {
        return await baseRequest.put(`/api/category/${id}`, user);
    } catch (err) {
        throw err;
    }
};
