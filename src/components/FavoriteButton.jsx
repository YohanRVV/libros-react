import React from "react";
import { useDispatch } from "react-redux";
import { addFavorito, removeFavorito } from "../slices/BookSlice";

const FavoriteButton = ({ bookId, isFavorite }) => {
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorito(bookId));
    } else {
      dispatch(addFavorito(bookId));
    }
  };

  return (
    <button
      onClick={handleToggleFavorite}
      className={`font-bold py-2 px-4 rounded text-white ${
        isFavorite
          ? "bg-red-600 hover:bg-red-800"
          : "bg-indigo-500 hover:bg-indigo-700"
      }`}
    >
      {isFavorite ? "Quitar de Favoritos" : "Añadir a Favoritos"}
    </button>
  );
};

export default FavoriteButton;
