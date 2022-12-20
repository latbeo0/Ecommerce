import { createSlice } from "@reduxjs/toolkit";
import { fetchLogin } from "../services/authFetch";
import { fetchLogout } from "../services/userFetch";

const initialState = {
    isLogged: false,
    provider: "",
    isLoading: false,
    isError: false,
    isAdmin: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Login
        builder
            .addCase(fetchLogin.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isLogged = true;

                if (action.payload) {
                    state.provider = action.payload;
                }
                // state.isAdmin = true;
            })
            .addCase(fetchLogin.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });

        //Log out
        builder
            .addCase(fetchLogout.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchLogout.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isLogged = false;
                // state.isAdmin = false;
            })
            .addCase(fetchLogout.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

// export const {} = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
