import { createSlice } from "@reduxjs/toolkit";
import {
    fetchAddToCart,
    fetchClearCart,
    fetchDecreaseNumber,
    fetchGetCart,
    fetchIncreaseNumber,
    fetchRemoveItem,
    fetchSelectAllItem,
    fetchSelectItem,
    fetchUnSelectAllItem,
} from "../services/cartFetch";

const initialState = {
    isLoading: false,
    listProducts: [],
    isError: false,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Get cart
        builder
            .addCase(fetchGetCart.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchGetCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.listProducts = action.payload;
            })
            .addCase(fetchGetCart.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });

        // Add to cart
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

        // Increase number
        builder
            .addCase(fetchIncreaseNumber.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchIncreaseNumber.fulfilled, (state, action) => {
                state.isLoading = false;
                const index = state.listProducts.findIndex((item) => {
                    return item.product._id === action.payload.product._id;
                });
                state.listProducts[index].count += 1;
            })
            .addCase(fetchIncreaseNumber.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });

        // Decrease number
        builder
            .addCase(fetchDecreaseNumber.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchDecreaseNumber.fulfilled, (state, action) => {
                state.isLoading = false;
                const index = state.listProducts.findIndex((item) => {
                    return item.product._id === action.payload.product._id;
                });
                state.listProducts[index].count -= 1;
            })
            .addCase(fetchDecreaseNumber.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });

        // Remove item
        builder
            .addCase(fetchRemoveItem.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchRemoveItem.fulfilled, (state, action) => {
                state.isLoading = false;
                const index = state.listProducts.findIndex((item) => {
                    return item.product._id === action.payload.product._id;
                });
                state.listProducts.splice(index, 1);
            })
            .addCase(fetchRemoveItem.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });

        // Select item
        builder
            .addCase(fetchSelectItem.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchSelectItem.fulfilled, (state, action) => {
                state.isLoading = false;
                const index = state.listProducts.findIndex((item) => {
                    return item.product._id === action.payload.product._id;
                });
                state.listProducts[index].isSelected =
                    !state.listProducts[index].isSelected;
            })
            .addCase(fetchSelectItem.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });

        // UnSelect all item
        builder
            .addCase(fetchUnSelectAllItem.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchUnSelectAllItem.fulfilled, (state, action) => {
                state.isLoading = false;
                // const newList = state.listProducts.map((item) => {
                //     if (!item.isError) return { ...item, isSelected: false };
                //     else return item;
                // });
                const newList = state.listProducts.map((item) => ({
                    ...item,
                    isSelected: false,
                }));
                state.listProducts = newList;
            })
            .addCase(fetchUnSelectAllItem.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });

        // Select all item
        builder
            .addCase(fetchSelectAllItem.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchSelectAllItem.fulfilled, (state, action) => {
                state.isLoading = false;
                // const newList = state.listProducts.map((item) => {
                //     if (!item.isError) return { ...item, isSelected: true };
                //     else return item;
                // });
                const newList = state.listProducts.map((item) => ({
                    ...item,
                    isSelected: true,
                }));
                state.listProducts = newList;
            })
            .addCase(fetchSelectAllItem.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });

        // Clear cart
        builder
            .addCase(fetchClearCart.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchClearCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.listProducts = [];
            })
            .addCase(fetchClearCart.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

// export const {} = cartSlice.actions;

export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
