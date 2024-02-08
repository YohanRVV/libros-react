import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import App from "../App";

describe("App", () => {
  test("renders App component", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.queryAllByText(/Libros/i).length).toBeGreaterThan(0);
    expect(screen.queryAllByText(/Favoritos/i).length).toBeGreaterThan(0);
    expect(screen.queryAllByText(/Libros Creados/i).length).toBeGreaterThan(0);
  });

  test('navigates to Books page when clicking on "Libros" link', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const linkBooksOptions = screen.getAllByText(/Libros/i);
    fireEvent.click(linkBooksOptions[0]);
  });
  test('navigates to Favorites page when clicking on "Favoritos" link', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const linkFavoritos = screen.getByText(/Favoritos/i);
    fireEvent.click(linkFavoritos);

    const favoritesPage = await screen.findByText(/Mis Libros Favoritos/i);
    expect(favoritesPage).toBeInTheDocument();
  });

  test('navigates to Created Books page when clicking on "Libros Creados" link', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const linkCreatedBooksOptions = screen.getAllByText(/Libros Creados/i);
    fireEvent.click(linkCreatedBooksOptions[0]);

    const createdBooksPage = await screen.findByText(/Añadir Nuevo Libro/i);
    expect(createdBooksPage).toBeInTheDocument();
  });
});
