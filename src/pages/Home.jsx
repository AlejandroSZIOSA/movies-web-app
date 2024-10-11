import MovieList from "../components/MovieList";
import MOVIES_JSON from "/src/services/json/movies.json";

export default function HomePage() {
  return (
    <main>
      <h1>Last Movies</h1>
      <section>
        <MovieList movies={MOVIES_JSON} />
      </section>
    </main>
  );
}
