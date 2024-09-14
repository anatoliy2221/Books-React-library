import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "./books/slice";
import { categoriesReducer } from "./categories/slice";
import { booksInCategoryReducer } from "./booksInCategory/slice";

export const store = configureStore(
    {
        reducer: {
            category: categoriesReducer,
            books: booksReducer,
            booksInCategory: booksInCategoryReducer,

        }
    }
)