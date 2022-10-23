import { createSlice } from '@reduxjs/toolkit';
import { fetchLogin } from '../services/authFetch';

const initialState = {
    isLogged: false,
    isLoading: false,
    isError: false,
};

export const authSlice = createSlice({
    name: 'auth',
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
            })
            .addCase(fetchLogin.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

// export const {} = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
