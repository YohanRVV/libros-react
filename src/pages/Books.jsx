import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../slices/BookSlice";
import BooksTable from "../components/BooksTable";
import Loading from "../components/Loading";

function BooksPage() {
  const dispatch = useDispatch();
  const { books, status } = useSelector((state) => state.books);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBooks());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "failed") {
    return <div>Error al cargar los libros.</div>;
  }

  return <BooksTable books={books} />;
}

export default BooksPage;
