import React from "react";
import { useDispatch } from "react-redux";
import { deleteCreatedBook } from "../slices/BookSlice";
import { useTable } from "react-table";

const CreatedBooksTable = ({ createdBooks }) => {
  const dispatch = useDispatch();

  const columns = React.useMemo(
    () => [
      {
        Header: "Título",
        accessor: "title",
      },
      {
        Header: "Autor",
        accessor: "authors",
      },
      {
        Header: "Género",
        accessor: "genre",
      },
      {
        Header: "Fecha de Publicación",
        accessor: "publishDate",
      },
      {
        Header: "Acciones",
        accessor: "id",
        Cell: ({ value }) => (
          <div className="flex justify-center">
            <button
              onClick={() => dispatch(deleteCreatedBook(value))}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded ml-2"
            >
              Eliminar
            </button>
          </div>
        ),
      },
    ],
    [dispatch]
  );

  const tableInstance = useTable({ columns, data: createdBooks });

  return (
    <table
      {...tableInstance.getTableProps()}
      className="min-w-full border-collapse border border-gray-300 shadow-lg"
    >
      <thead>
        {tableInstance.headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                className="border border-gray-200 p-2 text-center"
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...tableInstance.getTableBodyProps()}>
        {tableInstance.rows.map((row) => {
          tableInstance.prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="hover:bg-gray-100">
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  className="border border-gray-200 p-2 text-center"
                >
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CreatedBooksTable;
