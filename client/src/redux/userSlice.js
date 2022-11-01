import { createSlice } from '@reduxjs/toolkit';
import { fetchGetAccessToken, fetchLogout } from '../services/userFetch';

const initialState = {
    currentUser: null,
    isLoading: false,
    isError: false,
};

export const userSlice = createSlice({
    name: 'user',
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
    },
});

// export const {} = userSlice.actions;
export const selectUser = (state) => state.user;

export default userSlice.reducer;
