import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooksInCategory = createAsyncThunk(
    "booksInCategory",
    async (selectedCategory, thunkAPI) => {
        try {
            const { data } = await axios.get(
                `/books/category/?category=${selectedCategory}`
            );
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
