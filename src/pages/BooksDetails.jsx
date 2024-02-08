import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorito, removeFavorito } from "../slices/BookSlice";
import Loading from "../components/Loading";

const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favoritos = useSelector((state) => state.books.favoritos);
  const esFavorito = favoritos.includes(bookId);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(
          `https://www.anapioficeandfire.com/api/books/${bookId}`
        );
        if (!response.ok) {
          throw new Error("Error al obtener los detalles del libro");
        }
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error(error);
        navigate("/error");
      }
    };

    if (bookId) fetchBookDetails();
  }, [bookId, navigate]);

  const toggleFavorito = () => {
    if (esFavorito) {
      dispatch(removeFavorito(bookId));
    } else {
      dispatch(addFavorito(bookId));
    }
  };

  if (!book) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center">
      <div className="max-w-md w-full bg-indigo-100 shadow-lg rounded-lg overflow-hidden p-5 m-5">
        <h1 className="text-2xl font-bold text-indigo-900 text-center mb-4">
          Detalles del Libro
        </h1>
        <div className="mb-4">
          <p className="text-md text-indigo-800 mb-2">
            <strong>Título:</strong> {book.name}
          </p>
          <p className="text-md text-indigo-800 mb-2">
            <strong>ISBN:</strong> {book.isbn}
          </p>
          <p className="text-md text-indigo-800 mb-2">
            <strong>Autor(es):</strong> {book.authors.join(", ")}
          </p>
          <p className="text-md text-indigo-800 mb-2">
            <strong>Número de Páginas:</strong> {book.numberOfPages}
          </p>
          <p className="text-md text-indigo-800 mb-2">
            <strong>Editorial:</strong> {book.publisher}
          </p>
          <p className="text-md text-indigo-800 mb-2">
            <strong>País:</strong> {book.country}
          </p>
          <p className="text-md text-indigo-800 mb-2">
            <strong>Tipo de Medio:</strong> {book.mediaType}
          </p>
          <p className="text-md text-indigo-800 mb-4">
            <strong>Fecha de Lanzamiento:</strong>{" "}
            {new Date(book.released).toLocaleDateString()}
          </p>
        </div>
        <button
          onClick={toggleFavorito}
          className={`w-full text-white font-bold py-2 px-4 rounded ${
            esFavorito
              ? "bg-red-600 hover:bg-red-800"
              : "bg-indigo-500 hover:bg-indigo-700"
          }`}
        >
          {esFavorito ? "Quitar de Favoritos" : "Añadir a Favoritos"}
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
