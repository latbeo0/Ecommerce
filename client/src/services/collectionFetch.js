import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseRequest } from "./apiFetch";

export const fetchGetAllCollection = async () => {
    try {
        return await baseRequest.get("/api/collection/", null);
    } catch (err) {
        console.log(err);
    }
};

export const fetchGetAllCollection1 = createAsyncThunk(
    "state/fetchGetAllCollection",
    async () => {
        try {
            const res = await baseRequest.get("/api/collection/");
            return [...res.data.collection];
        } catch (error) {
            // if (!error.response) throw error;
            throw new Error(error.response.data.msg);
        }
    }
);
export const fetchAddNewCollection = async (collection, token) => {
    try {
        return await baseRequest.post("/api/collection/", collection, {
            headers: { Authorization: token },
        });
    } catch (err) {
        throw err;
    }
};
export const fetchUpdateCollection = async (collection, id, token) => {
    try {
        return await baseRequest.put(`/api/collection/${id}`, collection, {
            headers: { Authorization: token },
        });
    } catch (err) {
        throw err;
    }
};
