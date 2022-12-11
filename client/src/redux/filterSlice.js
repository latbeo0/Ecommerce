import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { maxValueRange } from '../helpers/contain';
import { fetchClearFilter, fetchFilter } from '../services/filterFetch';

const initialState = {
    search: '',
    pageSize: ['10'],
    pageIndex: ['1'],
    priceRange: [0, maxValueRange],
    categories: [],
    states: [],
    collections: [],
    sizes: [],
    colors: [],
    sort: ['relevance'],
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

        // Change filter
        builder
            .addCase(fetchFilter.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchFilter.fulfilled, (state, action) => {
                state.isLoading = false;
                for (const key in action.payload) {
                    state[key] = action.payload[key];
                }
            })
            .addCase(fetchFilter.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });

        // Clear filter
        builder
            .addCase(fetchClearFilter.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchClearFilter.fulfilled, (state, action) => {
                state.isLoading = false;
                for (const key in initialState) {
                    state[key] = initialState[key];
                }
            })
            .addCase(fetchClearFilter.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

// export const {} = authSlice.actions;

export const selectFilter = (state) => state.filters;
export const selectSearch = (state) => state.filters.search;
export const selectFilterCategories = (state) => state.filters.categories;
export const selectFilterStates = (state) => state.filters.states;
export const selectFilterCollections = (state) => state.filters.collections;

export default filterSlice.reducer;
