import React from "react";
import BookForm from "../components/BookForm";

const CreateBookPage = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-indigo-600 mt-6">
        Crear Nuevo Libro
      </h2>
      <BookForm />
    </div>
  );
};

export default CreateBookPage;
