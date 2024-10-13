import SearchBar from "../components/SearchBar";
import { useSelector } from "react-redux";

export default function HomePage() {
  const MOVIES = useSelector((state) => state.movies_.movie_list);

  return (
    <main>
      <h1>Last Movies</h1>
      <section>
        <SearchBar movies={MOVIES} />
      </section>
    </main>
  );
}
