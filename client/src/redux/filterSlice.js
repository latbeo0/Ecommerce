import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { maxValueRange } from '../helpers/contain';

const initialState = {
    search: '',
    priceRange: [0, maxValueRange],
    state: [],
    collections: [],
    sort: 'Relevance',
    isLoading: false,
    isError: false,
};

export const searchChange = createAsyncThunk(
    'filter/searchChange',
    (valueSearch) => {
        const { value } = valueSearch;
        return value;
    }
);

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Change search
        builder
            .addCase(searchChange.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(searchChange.fulfilled, (state, action) => {
                state.isLoading = false;
                state.search = action.payload;
            })
            .addCase(searchChange.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

// export const {} = authSlice.actions;

export const selectSearch = (state) => state.filter.search;

export default filterSlice.reducer;
