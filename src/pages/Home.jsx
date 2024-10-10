import React from "react";
import MovieList from "../components/MovieList";
import MOVIES_JSON from "/src/services/json/movies.json";

export default function HomePage() {
  return (
    <div>
      <h1>Last Movies</h1>
      <section>
        <MovieList movies={MOVIES_JSON} />
      </section>
    </div>
  );
}
