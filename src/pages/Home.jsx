import SearchBar from "../components/SearchBar";
import MOVIES_JSON from "/src/services/json/movies.json";

export default function HomePage() {
  return (
    <main>
      <h1>Last Movies</h1>
      <section>
        <SearchBar movies={MOVIES_JSON} />
      </section>
    </main>
  );
}
