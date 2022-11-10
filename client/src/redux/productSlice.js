import { createSlice } from '@reduxjs/toolkit';
import { fetchGetProducts } from '../services/productFetch';

const initialState = {
    totalProducts: 0,
    listProducts: null,
    isLoading: false,
    isError: false,
};

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Get products
        builder
            .addCase(fetchGetProducts.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchGetProducts.fulfilled, (state, action) => {
                const { totalProducts, listProducts } = action.payload;
                state.isLoading = false;
                state.totalProducts = totalProducts;
                state.listProducts = listProducts;
            })
            .addCase(fetchGetProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

// export const {} = productSlice.actions;
export const selectProducts = (state) => state.products;

export default productSlice.reducer;
