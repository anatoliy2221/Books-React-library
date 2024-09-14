import { createSlice } from "@reduxjs/toolkit";
import { fetchTopBooks } from "./operations";

const booksSlice = createSlice({
    name: "books",
    initialState: {
        items: [], isLoading: false, error: null
    },
    extraReducers: builder => {
        builder
        .addCase(fetchTopBooks.pending, state => {
            state.isLoading = true;})
        .addCase(fetchTopBooks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
    
    }
});

export const booksReducer = booksSlice.reducer;