import { baseRequest } from "./apiFetch";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFilter = createAsyncThunk(
    "filter/fetchFilter",
    async (valuesForm) => {
        const { filter } = valuesForm;
        try {
            // await baseRequest.post("/api/auth/login", {
            //     email,
            //     password,
            // });
            return { ...filter };
        } catch (error) {
            // if (!error.response) throw error;
            throw new Error(error.response.data.msg);
        }
    }
);

export const fetchClearFilter = createAsyncThunk(
    "filter/fetchClearFilter",
    async () => {
        try {
            // await baseRequest.post("/api/auth/login", {
            //     email,
            //     password,
            // });
        } catch (error) {
            // if (!error.response) throw error;
            throw new Error(error.response.data.msg);
        }
    }
);
