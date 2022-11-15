import { createSlice, current } from '@reduxjs/toolkit';
import { fetchAddToCart } from '../services/cartFetch';

const initialState = {
    isLoading: false,
    listProducts: [],
    isError: false,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAddToCart.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchAddToCart.fulfilled, (state, action) => {
                state.isLoading = false;
                // state.listProducts.map((item, index) => {
                //     if (
                //         item.product._id === action.payload.product._id &&
                //         item.size === action.payload.size
                //     ) {
                //         check = true;
                //         return (state.listProducts[index].count +=
                //             action.payload.count);
                //     }
                // });
                const deleteDuplicateProduct = state.listProducts.filter(
                    (item) =>
                        !(
                            item.product._id === action.payload.product._id &&
                            item.size === action.payload.size
                        )
                );
                state.listProducts = deleteDuplicateProduct;
                state.listProducts.push(action.payload);
            })
            .addCase(fetchAddToCart.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

// export const {} = cartSlice.actions;

export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
