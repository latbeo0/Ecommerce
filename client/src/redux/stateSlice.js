import { createSlice } from "@reduxjs/toolkit";
import { fetchGetAllState } from "../services/stateFetch";

const initialState = {
    isLoading: false,
    listStates: [],
    isError: false,
};

export const stateSlice = createSlice({
    name: "state",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Get all categories
        builder
            .addCase(fetchGetAllState.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchGetAllState.fulfilled, (state, action) => {
                state.isLoading = false;
                state.listStates = action.payload;
            })
            .addCase(fetchGetAllState.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

// export const {} = stateSlice.actions;

export const selectStates = (state) => state.states;

export default stateSlice.reducer;
