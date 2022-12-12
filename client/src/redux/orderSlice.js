import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    listOrders: [],
    isError: false,
};

export const sizeSlice = createSlice({
    name: 'size',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Get all sizes
        // builder
        //     .addCase(fetchGetAllSizes.pending, (state, action) => {
        //         state.isLoading = true;
        //     })
        //     .addCase(fetchGetAllSizes.fulfilled, (state, action) => {
        //         state.isLoading = false;
        //         state.listSizes = action.payload;
        //     })
        //     .addCase(fetchGetAllSizes.rejected, (state, action) => {
        //         state.isLoading = false;
        //         state.isError = true;
        //     });
    },
});

// export const {} = stateSlice.actions;

export const selectSizes = (state) => state.sizes;

export default sizeSlice.reducer;
