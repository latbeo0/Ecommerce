import { baseRequest } from "./apiFetch";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAddToCart = createAsyncThunk(
    "cart/addToCart",
    async (args) => {
        try {
            const { user, product, size, count, isSelected } = args;

            if (user) {
                await baseRequest.post(
                    `/api/user/cart`,
                    {
                        productId: product._id,
                        size,
                        count,
                        isSelected,
                    },
                    {
                        headers: { Authorization: user.access_token },
                    }
                );
            }

            return { product, size, count, isSelected: true, isError: false };
        } catch (error) {
            throw new Error(error.response.data.msg);
        }
    }
);

export const fetchIncreaseNumber = createAsyncThunk(
    "cart/fetchIncreaseNumber",
    async (args) => {
        try {
            const { user, product, quantity } = args;

            if (user) {
                await baseRequest.post(
                    `/api/user/cart/increase`,
                    {
                        productId: product._id,
                        quantity: quantity + 1,
                    },
                    {
                        headers: { Authorization: user.access_token },
                    }
                );
            }

            return { product };
        } catch (error) {
            throw new Error(error.response.data.msg);
        }
    }
);

export const fetchDecreaseNumber = createAsyncThunk(
    "cart/fetchDecreaseNumber",
    async (args) => {
        try {
            const { user, product, quantity } = args;

            if (user) {
                await baseRequest.post(
                    `/api/user/cart/decrease`,
                    {
                        productId: product._id,
                        quantity: quantity - 1,
                    },
                    {
                        headers: { Authorization: user.access_token },
                    }
                );
            }

            return { product };
        } catch (error) {
            throw new Error(error.response.data.msg);
        }
    }
);

export const fetchRemoveItem = createAsyncThunk(
    "cart/fetchRemoveItem",
    async (args) => {
        try {
            const { user, product } = args;

            if (user) {
                await baseRequest.post(
                    `/api/user/cart/item`,
                    {
                        productId: product._id,
                    },
                    {
                        headers: { Authorization: user.access_token },
                    }
                );
            }

            return { product };
        } catch (error) {
            throw new Error(error.response.data.msg);
        }
    }
);

export const fetchSelectItem = createAsyncThunk(
    "cart/fetchSelectItem",
    async (args) => {
        try {
            const { user, product, isSelected } = args;

            if (user) {
                await baseRequest.put(
                    `/api/user/cart/select`,
                    {
                        productId: product._id,
                        isSelected: !isSelected,
                    },
                    {
                        headers: { Authorization: user.access_token },
                    }
                );
            }

            return { product };
        } catch (error) {
            throw new Error(error.response.data.msg);
        }
    }
);

export const fetchUnSelectAllItem = createAsyncThunk(
    "cart/fetchUnSelectAllItem",
    async (args) => {
        const { user } = args;

        if (user) {
            await baseRequest.put(`/api/user/cart/unselectAll`, null, {
                headers: { Authorization: user.access_token },
            });
        }
        try {
        } catch (error) {
            throw new Error(error.response.data.msg);
        }
    }
);

export const fetchSelectAllItem = createAsyncThunk(
    "cart/fetchSelectAllItem",
    async (args) => {
        const { user } = args;

        if (user) {
            await baseRequest.put(`/api/user/cart/selectAll`, null, {
                headers: { Authorization: user.access_token },
            });
        }
        try {
        } catch (error) {
            throw new Error(error.response.data.msg);
        }
    }
);

export const fetchClearCart = createAsyncThunk(
    "cart/fetchClearCart",
    async (args) => {
        try {
            const { user } = args;
            if (user) {
                await baseRequest.delete(`/api/user/cart`, {
                    headers: { Authorization: user.access_token },
                });
            }
        } catch (error) {
            throw new Error(error.response.data.msg);
        }
    }
);

export const fetchGetCart = createAsyncThunk(
    "cart/fetchGetCart",
    async (args) => {
        try {
            const { user } = args;

            if (user) {
                const res = await baseRequest.get(`/api/user/cart`, {
                    headers: { Authorization: user.access_token },
                });

                const dataTemp = res.data.cart.map((cartItem) => ({
                    ...cartItem,
                    isError:
                        cartItem.product.color.details.find(
                            (detail) => detail.size === cartItem.size
                        ).quantity < cartItem.count,
                }));

                return dataTemp;
            }

            // return { product, size, count, isSelected: true, isError: false };
        } catch (error) {
            throw new Error(error.response.data.msg);
        }
    }
);
