import { baseRequest } from "./apiFetch";

import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchGetAccessToken = async () => {
//     return await baseRequest.post('/api/user/refresh_token', null);
// };

export const fetchGetAccessToken = createAsyncThunk(
    "user/getAccessToken",
    async () => {
        try {
            const res = await baseRequest.post("/api/user/refresh_token", null);
            return res.data;
        } catch (error) {
            throw new Error(error.response.data.msg);
        }
    }
);

export const fetchForgotPassword = async (email) => {
    return await baseRequest.post("/api/user/forgot_password", { email });
};

export const fetchResetPassword = async (password, token) => {
    return await baseRequest.post(
        "/api/user/reset_password",
        { password },
        {
            headers: { Authorization: token },
        }
    );
};

export const fetchGetAllUser = async () => {
    try {
        return await baseRequest.get("/api/user/", null);
    } catch (err) {
        console.log(err);
    }
};
export const fetchAddNewUser = async (user, token) => {
    try {
        return await baseRequest.post("/api/user/", user);
    } catch (err) {
        throw err;
    }
};
export const fetchUpdateUser = async (user, id, token) => {
    try {
        return await baseRequest.put(`/api/user/${id}`, user);
    } catch (err) {
        throw err;
    }
};
// export const fetchLogout = async () => {
//     return await baseRequest.get('/api/user/logout', null);
// };

export const fetchLogout = createAsyncThunk("user/logout", async () => {
    try {
        await baseRequest.get("/api/user/logout", null);
    } catch (error) {
        throw new Error(error.response.data.msg);
    }
});

export const fetchWishList = createAsyncThunk(
    "user/change_wish_list",
    async (args) => {
        try {
            const { type, productId, token } = args;
            await baseRequest.post(
                "/api/user/wish_list",
                {
                    type,
                    productId,
                },
                {
                    headers: { Authorization: token },
                }
            );
            return { type, productId };
        } catch (error) {
            throw new Error(error.response.data.msg);
        }
    }
);

export const fetchGetWishList = createAsyncThunk(
    "user/get_wish_list",
    async (args) => {
        try {
            const { id, token } = args;
            const res = await baseRequest.get(`/api/user/wish_list/${id}`, {
                headers: { Authorization: token },
            });
            return res.data;
        } catch (error) {
            throw new Error(error.response.data.msg);
        }
    }
);

export const fetchClearWishList = createAsyncThunk(
    "user/clear_wish_list",
    async (args) => {
        try {
            const { id, token } = args;
            const res = await baseRequest.delete(`/api/user/wish_list/${id}`, {
                headers: { Authorization: token },
            });
            return res.data;
        } catch (error) {
            throw new Error(error.response.data.msg);
        }
    }
);

export const fetchChangeUserInfo = createAsyncThunk(
    "user/change_user_info",
    async (args) => {
        try {
            const { id, token, data } = args;
            // console.log(data);
            await baseRequest.put(
                `/api/user/find/${id}/userInfo`,
                {
                    ...data,
                },
                {
                    headers: { Authorization: token },
                }
            );
            return { ...data };
        } catch (error) {
            throw new Error(error.response.data.msg);
        }
    }
);

export const fetchChangeAvatar = createAsyncThunk(
    "user/change_avatar",
    async (args) => {
        try {
            const { formData, token, id, dispatch } = args;

            const res = await baseRequest.post(
                `/api/upload/upload_avatar`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: token,
                    },
                }
            );

            const data = { avatar: res.data.url };

            await dispatch(fetchChangeUserInfo({ id, token, data })).unwrap();
        } catch (error) {
            throw new Error(error.response.data.msg);
        }
    }
);
