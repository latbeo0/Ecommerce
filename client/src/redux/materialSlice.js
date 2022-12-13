import { createSlice } from '@reduxjs/toolkit';
import { fetchGetAllMaterial1 } from '../services/materialFetch';

const initialState = {
    isLoading: false,
    listMaterials: [],
    isError: false,
};

export const categorySlice = createSlice({
    name: 'material',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Get all materials
        builder
            .addCase(fetchGetAllMaterial1.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchGetAllMaterial1.fulfilled, (state, action) => {
                state.isLoading = false;
                state.listMaterials = action.payload;
            })
            .addCase(fetchGetAllMaterial1.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

// export const {} = categorySlice.actions;

export const selectMaterials = (state) => state.materials;

export default categorySlice.reducer;
