export const fetchBooks = async () => {
  const response = await fetch("https://www.anapioficeandfire.com/api/books");
  if (!response.ok) {
    throw new Error("Error al obtener los libros");
  }
  return response.json();
};

export const fetchBookDetails = async () => {
  const response = await fetch("https://www.anapioficeandfire.com/api/books");
  if (!response.ok) {
    throw new Error("Error al obtener los libros");
  }
  const books = await response.json();

  return books.map((book) => ({
    ...book,
    id: book.url.split("/").pop(),
  }));
};
