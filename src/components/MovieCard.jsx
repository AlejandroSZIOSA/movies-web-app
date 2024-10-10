import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  const { title, picture, id } = movie;
  return (
    <article>
      <h2>{title}</h2>
      <p>{picture}</p>
      <p>{id}</p>
      <button>
        <Link to={`/Details/${id}`}>Details</Link>
      </button>
    </article>
  );
}
