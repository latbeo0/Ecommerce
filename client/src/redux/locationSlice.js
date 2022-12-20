import { createSlice } from "@reduxjs/toolkit";
import {
    fetchDistrict,
    fetchProvince,
    fetchWard,
} from "../services/locationFetch";

const initialState = {
    province: [],
    district: [],
    ward: [],
    isLoading: false,
    isError: false,
};

export const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Get all province
        builder
            .addCase(fetchProvince.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchProvince.fulfilled, (state, action) => {
                state.isLoading = false;
                state.province = action.payload;
            })
            .addCase(fetchProvince.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });

        // Get all district
        builder
            .addCase(fetchDistrict.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchDistrict.fulfilled, (state, action) => {
                state.isLoading = false;
                state.district = action.payload;
            })
            .addCase(fetchDistrict.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });

        // Get all ward
        builder
            .addCase(fetchWard.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchWard.fulfilled, (state, action) => {
                state.isLoading = false;
                state.ward = action.payload;
            })
            .addCase(fetchWard.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

// export const {} = authSlice.actions;

export const selectLocation = (state) => state.location;

export default locationSlice.reducer;
