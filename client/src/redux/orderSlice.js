import { createSlice } from '@reduxjs/toolkit';
import { fetchClearOrder, fetchGetAllOrder1 } from '../services/orderFetch';

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
        // Get all orders
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

        // Clear order
        builder
            .addCase(fetchClearOrder.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchClearOrder.fulfilled, (state, action) => {
                state.isLoading = false;
                state.listOrders = [];
            })
            .addCase(fetchClearOrder.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

// export const {} = stateSlice.actions;

export const selectOrders = (state) => state.orders;

export default orderSlice.reducer;
