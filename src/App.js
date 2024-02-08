import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Books from "./pages/Books";
import Favoritos from "./pages/Favorites";
import BookDetails from "./pages/BooksDetails";
import CreateBookPage from "./pages/CreateBookPage";
import CreatedBooksPage from "./pages/CreatedBookPage";

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <nav className="flex justify-between items-center bg-indigo-500 text-white shadow-md rounded-lg p-4">
          <div className="flex gap-4">
            <Link
              to="/"
              className="bg-white text-indigo-500 hover:bg-indigo-600 hover:text-white font-bold uppercase py-2 px-4 rounded transition duration-300 ease-in-out"
            >
              Libros
            </Link>
            <Link
              to="/favoritos"
              className="bg-white text-indigo-500 hover:bg-indigo-600 hover:text-white font-bold uppercase py-2 px-4 rounded transition duration-300 ease-in-out"
            >
              Favoritos
            </Link>
            <Link
              to="/created-books"
              className="bg-white text-indigo-500 hover:bg-indigo-700 hover:text-white font-bold uppercase py-2 px-4 rounded transition duration-300 ease-in-out"
            >
              Libros Creados
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/books/:bookId" element={<BookDetails />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/create-book" element={<CreateBookPage />} />
          <Route path="/created-books" element={<CreatedBooksPage />} />{" "}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
