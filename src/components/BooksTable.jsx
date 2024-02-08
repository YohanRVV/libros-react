import React from "react";
import { useTable } from "react-table";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FavoriteButton from "../components/FavoriteButton";
import { setSearchTerm } from "../slices/BookSlice";

const BooksTable = ({ books }) => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.books.searchTerm);
  const favoritos = useSelector((state) => state.books.favoritos);

  const handleSearch = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const filteredBooks = React.useMemo(() => {
    return books.filter(
      (book) =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.authors.join(", ").toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [books, searchTerm]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Título",
        accessor: "name",
        Cell: ({ row }) => {
          const bookId = row.original.url.split("/").pop();
          return (
            <Link
              to={`/books/${bookId}`}
              className="text-lg text-indigo-600 hover:text-indigo-800"
            >
              {row.original.name}
            </Link>
          );
        },
      },
      {
        Header: "Autor(es)",
        accessor: "authors",
        Cell: ({ value }) => (
          <div className="text-center">{value.join(", ")}</div>
        ),
      },
      {
        Header: "Acciones",
        accessor: "url",
        Cell: ({ row }) => {
          const bookId = row.original.url.split("/").pop();
          const isFavorite = favoritos.includes(bookId);
          return (
            <div className="flex justify-center">
              <FavoriteButton bookId={bookId} isFavorite={isFavorite} />
            </div>
          );
        },
      },
    ],
    [favoritos]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: filteredBooks });

  return (
    <>
      <input
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Buscar libros..."
        className="w-full p-2 mb-4 mt-4 border-2 border-indigo-500 rounded-lg focus:outline-none focus:border-indigo-700 placeholder-indigo-500"
      />
      <table
        {...getTableProps()}
        className="min-w-full divide-y divide-gray-200"
      >
        <thead className="bg-gray-50">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          {...getTableBodyProps()}
          className="bg-white divide-y divide-gray-200"
        >
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="px-6 py-4 whitespace-nowrap text-center"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default BooksTable;
