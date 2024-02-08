# Aplicación de Gestión de Libros

Este proyecto es una aplicación web para gestionar una colección de libros. La aplicación consume datos de una API externa para listar libros y permite a los usuarios añadir, marcar como favoritos, buscar y eliminar libros. Los libros añadidos por los usuarios se almacenan localmente en el navegador, utilizando el almacenamiento local (`localStorage`), para persistir los datos entre sesiones del navegador.

## Características

- **Consumo de API**: La aplicación consume una API externa para obtener una lista inicial de libros.
- **Listar libros**: Muestra todos los libros disponibles.
- **Buscar libros**: Permite a los usuarios buscar libros por título o autor.
- **Añadir nuevos libros**: Los usuarios pueden añadir nuevos libros al sistema. Estos libros se almacenan en el almacenamiento local del navegador.
- **Marcar como favoritos**: Los usuarios pueden marcar libros como favoritos para un acceso rápido. Los favoritos también se guardan en el almacenamiento local.
- **Eliminar libros creados**: Los usuarios pueden eliminar los libros que han añadido.

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
2. Navega al directorio del proyecto.
3. Instala las dependencias.
4. Inicia el servidor de desarrollo.


Esto abrirá la aplicación en `http://localhost:3000` en tu navegador.

---

## Uso

Una vez que la aplicación esté ejecutándose, podrás:

- Navegar a la lista de libros desde la barra de navegación.
- Utilizar el formulario para añadir nuevos libros.
- Marcar libros como favoritos haciendo clic en el botón correspondiente.
- Buscar libros utilizando la barra de búsqueda en la lista de libros.
