import React from "react";
import { useSelector } from "react-redux";
import CreatedBooksTable from "../components/CreatedBookTable";
import { Link } from "react-router-dom";

const CreatedBooksPage = () => {
  const { createdBooks } = useSelector((state) => state.books);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center text-indigo-600 mb-4">
        Libros Creados
      </h1>
      <div className="flex justify-between mb-4">
        <Link
          to="/create-book"
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        >
          Añadir Nuevo Libro
        </Link>
      </div>
      <CreatedBooksTable createdBooks={createdBooks} />
    </div>
  );
};

export default CreatedBooksPage;
