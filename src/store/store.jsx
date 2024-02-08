import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../slices/BookSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});
