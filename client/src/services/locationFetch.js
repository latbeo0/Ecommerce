import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProvince = createAsyncThunk(
    "location/fetchProvince",
    async () => {
        try {
            const res = await axios.get(
                "https://provinces.open-api.vn/api/p/?depth=2",
                null
            );
            return res.data;
        } catch (error) {
            // if (!error.response) throw error;
            throw new Error(error.response.data.msg);
        }
    }
);

export const fetchDistrict = createAsyncThunk(
    "location/fetchDistrict",
    async () => {
        try {
            const res = await axios.get(
                "https://provinces.open-api.vn/api/d/?depth=2",
                null
            );
            return res.data;
        } catch (error) {
            // if (!error.response) throw error;
            throw new Error(error.response.data.msg);
        }
    }
);

export const fetchWard = createAsyncThunk("location/fetchWard", async () => {
    try {
        const res = await axios.get(
            "https://provinces.open-api.vn/api/w/?depth=2",
            null
        );
        return res.data;
    } catch (error) {
        // if (!error.response) throw error;
        throw new Error(error.response.data.msg);
    }
});
