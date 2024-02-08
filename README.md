# Aplicación de Gestión de Libros

Este proyecto es una aplicación web para gestionar una colección de libros. La aplicación consume datos de una API externa para listar libros y permite a los usuarios añadir, marcar como favoritos, buscar y eliminar libros. Los libros añadidos por los usuarios se almacenan localmente en el navegador, utilizando el almacenamiento local (`localStorage`), para persistir los datos entre sesiones del navegador.

## Características

- Consumo de la API de libros para obtener una lista de libros con su detalle.
- Interfaz desarrollada con React y estilizada con Tailwind CSS para una experiencia de usuario moderna y responsiva.
- Capacidad de buscar libros utilizando un campo de búsqueda dinámico.
- Los libros creados por el usuario se almacenan en localStorage, permitiendo persistencia de datos entre sesiones.
- Funcionalidad para marcar libros como favoritos y gestionar una lista de favoritos.
- Al hacer click en el título de un libro, se navega a una página de detalle donde se muestra más información sobre dicho libro.
- Los libros creados por el usuario pueden ser eliminados, actualizando el almacenamiento local y la visualización en tiempo real.

---

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Redux Toolkit**: Herramienta para manejar el estado global de la aplicación.
- **Formik**: Biblioteca para construir formularios en React.
- **React Table**: Biblioteca para construir y gestionar tablas en React.
- **React Router**: Biblioteca para el enrutamiento en aplicaciones React.
- **Tailwind CSS**: Marco de CSS para diseñar rápidamente interfaces de usuario personalizadas.


---

## Instalación

Para poner en marcha el proyecto en tu entorno local, sigue estos pasos:

1. Clona el repositorio
    ```bash
        git clone https://github.com/YohanRVV/libros-react.git
    ```
2. Navega al directorio del proyecto.
    ```bash
        cd directorio-del-proyecto
    ```
3. Instala las dependencias.
    ```bash
        npm install
    ```
4. Inicia el servidor de desarrollo.
    ```bash
        npm start
    ```


Esto abrirá la aplicación en `http://localhost:3000` en tu navegador.

---

## Uso

Una vez que la aplicación esté ejecutándose, podrás:

- Navegar a la lista de libros desde la barra de navegación.
- Utilizar el formulario para añadir nuevos libros.
- Marcar libros como favoritos haciendo clic en el botón correspondiente.
- Buscar libros utilizando la barra de búsqueda en la lista de libros.
