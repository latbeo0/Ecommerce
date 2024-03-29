import { createSlice } from "@reduxjs/toolkit";
import { fetchGetAllCategory1 } from "../services/categoryFetch";

const initialState = {
    isLoading: false,
    listCategories: [],
    isError: false,
};

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Get all categories
        builder
            .addCase(fetchGetAllCategory1.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchGetAllCategory1.fulfilled, (state, action) => {
                state.isLoading = false;
                state.listCategories = action.payload;
            })
            .addCase(fetchGetAllCategory1.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

// export const {} = categorySlice.actions;

export const selectCategories = (state) => state.categories;

export default categorySlice.reducer;
