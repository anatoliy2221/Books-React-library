import { createSlice } from "@reduxjs/toolkit";
import { fetchBooksInCategory } from "./operations";

const booksInCategorySlice = createSlice({
    name: "booksInCategory",
    initialState: {
        item: []
    },
    extraReducers: builder => {
        builder
            .addCase(fetchBooksInCategory.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchBooksInCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.item = action.payload;
            })
    }
});

export const booksInCategoryReducer = booksInCategorySlice.reducer;