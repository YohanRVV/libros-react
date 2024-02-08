import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../../slices/BookSlice";
import BookForm from "../BookForm";

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export default {
  title: "Forms/BookForm",
  component: BookForm,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </Provider>
    ),
  ],
};

export const Default = () => <BookForm />;
