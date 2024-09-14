import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://books-backend.p.goit.global/";

export const fetchTopBooks = createAsyncThunk('books', async (_, thunkAPI) => {
    try {
        const {data} = await axios.get('books/top-books');
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});




