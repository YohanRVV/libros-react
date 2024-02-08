import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCreatedBook } from "../slices/BookSlice";

const BookForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    title: "",
    author: "",
    genre: "",
    publishDate: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("El título es obligatorio"),
    author: Yup.string().required("El autor es obligatorio"),
    genre: Yup.string().required("El género es obligatorio"),
    publishDate: Yup.date()
      .required("La fecha de publicación es obligatoria")
      .nullable(),
  });

  const onSubmit = (values, { resetForm }) => {
    const newBook = { ...values, id: Date.now().toString() };
    dispatch(addCreatedBook(newBook));
    resetForm();

    alert("Libro agregado con éxito");

    navigate("/created-books");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-xs">
        <h1 className="text-2xl font-bold text-center mb-6 text-indigo-600">
          Añadir Nuevo Libro
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="bg-indigo-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <Field
                name="title"
                placeholder="Título"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div>
            <div className="mb-4">
              <Field
                name="author"
                placeholder="Autor"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="author"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div>
            <div className="mb-4">
              <Field
                name="genre"
                placeholder="Género"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="genre"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div>
            <div className="mb-4">
              <Field
                name="publishDate"
                type="date"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="publishDate"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Agregar Libro
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default BookForm;
