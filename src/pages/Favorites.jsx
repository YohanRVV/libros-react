import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBooks } from "../slices/BookSlice";

const Favoritos = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const favoritosIds = useSelector((state) => state.books.favoritos);
  const status = useSelector((state) => state.books.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);

  const librosFavoritos = books.filter((book) =>
    favoritosIds.includes(book.url.split("/").pop())
  );

  return (
    <div className="flex flex-col items-center my-4">
      <h1 className="text-2xl font-bold text-indigo-600 mb-4">
        Mis Libros Favoritos
      </h1>
      <div className="w-full flex flex-wrap justify-center gap-4">
        {librosFavoritos.length > 0 ? (
          librosFavoritos.map((book) => (
            <div
              key={book.url}
              className="bg-indigo-100 shadow-md rounded-lg p-6 mb-4 w-full max-w-sm text-center hover:shadow-lg transition-shadow duration-300"
            >
              <Link
                to={`/books/${book.url.split("/").pop()}`}
                className="text-lg font-semibold text-indigo-700 hover:text-indigo-900"
              >
                {book.name}
              </Link>
            </div>
          ))
        ) : (
          <p className="text-indigo-600">No tienes libros favoritos.</p>
        )}
      </div>
    </div>
  );
};

export default Favoritos;
