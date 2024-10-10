import React from "react";

export default function MovieCard({ movie }) {
  const { title, picture, id } = movie;
  return (
    <article>
      <h2>{title}</h2>
      <p>{picture}</p>
      <p>{id}</p>
      <button>Details</button>
    </article>
  );
}
