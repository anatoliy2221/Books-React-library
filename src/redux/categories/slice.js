import { createSlice } from "@reduxjs/toolkit";
import { fetchCategoryList } from "./operations";

const categoriesSlice = createSlice({
    name: "category",
    initialState: {
        item: [],
    },
    extraReducers: builder => {
        builder
        .addCase(fetchCategoryList.pending, state => {
            state.isLoading = true;
        })
        .addCase(fetchCategoryList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.item = action.payload;
        })
    }
});

export const categoriesReducer = categoriesSlice.reducer;
