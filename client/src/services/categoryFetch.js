import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseRequest } from "./apiFetch";

export const fetchGetAllCategory = async () => {
    try {
        return await baseRequest.get("/api/category/", null);
    } catch (err) {
        console.log(err);
    }
};
export const fetchAddNewCategory = async (category, token) => {
    try {
        return await baseRequest.post("/api/category/", category, {
            headers: { Authorization: token },
        });
    } catch (err) {
        throw err;
    }
};

export const fetchUpdateCategory = async (category, id, token) => {
    try {
        return await baseRequest.put(`/api/category/${id}`, category, {
            headers: { Authorization: token },
        });
    } catch (err) {
        throw err;
    }
};
export const fetchGetAllCategory1 = createAsyncThunk(
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
