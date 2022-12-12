import { createSlice } from "@reduxjs/toolkit";
import { fetchGetAllColors } from "../services/colorFetch";

const initialState = {
    isLoading: false,
    listColors: [],
    isError: false,
};

export const colorSlice = createSlice({
    name: "color",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Get all colors
        builder
            .addCase(fetchGetAllColors.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchGetAllColors.fulfilled, (state, action) => {
                state.isLoading = false;
                state.listColors = action.payload;
            })
            .addCase(fetchGetAllColors.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

// export const {} = stateSlice.actions;

export const selectColors = (state) => state.colors;

export default colorSlice.reducer;
