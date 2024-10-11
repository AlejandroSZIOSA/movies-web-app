import React from "react";
import { useParams } from "react-router-dom";

export default function DetailsPage() {
  const { movieId } = useParams();
  return (
    <main>
      <h1>Product details page</h1>
      <h2>Details</h2>
      <p>{movieId}</p>
    </main>
  );
}
