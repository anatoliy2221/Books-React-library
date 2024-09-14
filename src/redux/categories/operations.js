import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategoryList = createAsyncThunk('categoryList', async (_, thunkAPI) => {
    try {
        const {data} = await axios.get('books/category-list');
       
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});