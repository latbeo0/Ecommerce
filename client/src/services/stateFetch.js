import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseRequest } from "./apiFetch";

export const fetchGetAllState = createAsyncThunk(
    "state/fetchGetAllState",
    async () => {
        try {
            const res = await baseRequest.get("/api/state/");
            return [...res.data.states];
        } catch (error) {
            // if (!error.response) throw error;
            throw new Error(error.response.data.msg);
        }
    }
);
