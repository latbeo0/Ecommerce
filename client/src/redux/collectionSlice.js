import { createSlice } from "@reduxjs/toolkit";
import { fetchGetAllCollection } from "../services/collectionFetch";

const initialState = {
    isLoading: false,
    listCollections: [],
    isError: false,
};

export const collectionSlice = createSlice({
    name: "collection",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Get all categories
        builder
            .addCase(fetchGetAllCollection.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchGetAllCollection.fulfilled, (state, action) => {
                state.isLoading = false;
                state.listCollections = action.payload;
            })
            .addCase(fetchGetAllCollection.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

// export const {} = collectionSlice.actions;

export const selectCollections = (state) => state.collections;

export default collectionSlice.reducer;
