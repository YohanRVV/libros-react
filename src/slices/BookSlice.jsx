import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const loadFavoritos = () => {
  try {
    const serializedState = localStorage.getItem("favoritos");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

const initialState = {
  books: [],
  createdBooks: JSON.parse(localStorage.getItem("createdBooks") || "[]"),
  favoritos: loadFavoritos(),
  searchTerm: "",
  status: "idle",
  error: null,
};

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await fetch("https://www.anapioficeandfire.com/api/books");
  if (!response.ok) {
    throw new Error("Error al obtener los libros");
  }
  return response.json();
});

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    addFavorito: (state, action) => {
      if (!state.favoritos.includes(action.payload)) {
        state.favoritos.push(action.payload);
        localStorage.setItem("favoritos", JSON.stringify(state.favoritos));
      }
    },
    removeFavorito: (state, action) => {
      state.favoritos = state.favoritos.filter((id) => id !== action.payload);
      localStorage.setItem("favoritos", JSON.stringify(state.favoritos));
    },
    addCreatedBook: (state, action) => {
      state.createdBooks.push(action.payload);
      localStorage.setItem("createdBooks", JSON.stringify(state.createdBooks));
    },
    editCreatedBook: (state, action) => {
      state.createdBooks = state.createdBooks.map((book) =>
        book.id === action.payload.id ? action.payload : book
      );
      localStorage.setItem("createdBooks", JSON.stringify(state.createdBooks));
    },
    deleteCreatedBook: (state, action) => {
      state.createdBooks = state.createdBooks.filter(
        (book) => book.id !== action.payload
      );
      localStorage.setItem("createdBooks", JSON.stringify(state.createdBooks));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "No se pudo cargar los libros";
      });
  },
});

export const {
  setSearchTerm,
  addFavorito,
  removeFavorito,
  addCreatedBook,
  editCreatedBook,
  deleteCreatedBook,
} = booksSlice.actions;

export default booksSlice.reducer;
