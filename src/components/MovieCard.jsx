import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { operations_Slice_Actions } from "../utils/redux/store";

export default function MovieCard({ movie }) {
  const dispatch = useDispatch();

  function handleAddToFavorites() {
    const favorite = { title: "f1", description: "f2" };
    dispatch(operations_Slice_Actions.ADD_PRODUCT(favorite));
  }
  const { title, picture, id } = movie;
  return (
    <article>
      <h2>{title}</h2>
      <p>{picture}</p>
      <p>{id}</p>
      <button onClick={handleAddToFavorites}>Add to Favorite List</button>
      <button>
        <Link to={`/Details/${id}`}>Details</Link>
      </button>
    </article>
  );
}
