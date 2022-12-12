import { createSlice } from '@reduxjs/toolkit';
import { fetchGetAllOrder1 } from '../services/orderFetch';

const initialState = {
    isLoading: false,
    listOrders: [],
    isError: false,
};

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Get all sizes
        builder
            .addCase(fetchGetAllOrder1.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchGetAllOrder1.fulfilled, (state, action) => {
                state.isLoading = false;
                state.listOrders = action.payload;
            })
            .addCase(fetchGetAllOrder1.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

// export const {} = stateSlice.actions;

export const selectOrders = (state) => state.orders;

export default orderSlice.reducer;
