import { createSlice, current } from "@reduxjs/toolkit";
import {
    fetchAddAddressShipping,
    fetchChangeDefaultAddressShipping,
    fetchChangeUserInfo,
    fetchClearWishList,
    fetchDeleteAddressShipping,
    fetchGetAccessToken,
    fetchLogout,
    fetchWishList,
} from "../services/userFetch";

const initialState = {
    currentUser: null,
    isLoading: false,
    isError: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Access_token
        builder
            .addCase(fetchGetAccessToken.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchGetAccessToken.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentUser = action.payload;
            })
            .addCase(fetchGetAccessToken.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });

        // Log out
        builder
            .addCase(fetchLogout.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchLogout.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentUser = null;
            })
            .addCase(fetchLogout.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });

        // Change wish list
        builder
            .addCase(fetchWishList.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchWishList.fulfilled, (state, action) => {
                const { type, productId } = action.payload;
                state.isLoading = false;
                if (type === 0) {
                    state.currentUser.favoriteProductID.push(productId);
                } else {
                    const index =
                        state.currentUser.favoriteProductID.indexOf(productId);
                    state.currentUser.favoriteProductID.splice(index, 1);
                }
            })
            .addCase(fetchWishList.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });

        // Clear wish list
        builder
            .addCase(fetchClearWishList.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchClearWishList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentUser.favoriteProductID = [];
            })
            .addCase(fetchClearWishList.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });

        // Edit user info
        builder
            .addCase(fetchChangeUserInfo.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchChangeUserInfo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentUser = { ...state.currentUser, ...action.payload };
            })
            .addCase(fetchChangeUserInfo.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });

        // Add address shipping
        builder
            .addCase(fetchAddAddressShipping.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchAddAddressShipping.fulfilled, (state, action) => {
                state.isLoading = false;
                const newArray = state.currentUser.addressShipping.map(
                    (item) => ({ ...item, isSelected: false })
                );
                newArray.push(action.payload);
                state.currentUser.addressShipping = newArray;
            })
            .addCase(fetchAddAddressShipping.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });

        // Change default address shipping
        builder
            .addCase(
                fetchChangeDefaultAddressShipping.pending,
                (state, action) => {
                    state.isLoading = true;
                }
            )
            .addCase(
                fetchChangeDefaultAddressShipping.fulfilled,
                (state, action) => {
                    state.isLoading = false;
                    const { id } = action.payload;
                    const newArray = state.currentUser.addressShipping.map(
                        (item) => {
                            if (item.id === id) {
                                return { ...item, isSelected: true };
                            } else {
                                return { ...item, isSelected: false };
                            }
                        }
                    );
                    state.currentUser.addressShipping = newArray;
                }
            )
            .addCase(
                fetchChangeDefaultAddressShipping.rejected,
                (state, action) => {
                    state.isLoading = false;
                    state.isError = true;
                }
            );

        // Delete address shipping
        builder
            .addCase(fetchDeleteAddressShipping.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchDeleteAddressShipping.fulfilled, (state, action) => {
                state.isLoading = false;
                const { id } = action.payload;
                const newArray = state.currentUser.addressShipping.filter(
                    (item) => item.id !== id
                );
                state.currentUser.addressShipping = newArray;
            })
            .addCase(fetchDeleteAddressShipping.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

// export const {} = userSlice.actions;
export const selectUser = (state) => state.user;

export default userSlice.reducer;
