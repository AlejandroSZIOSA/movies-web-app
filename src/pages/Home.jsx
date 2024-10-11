import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import MOVIES_JSON from "/src/services/json/movies.json";

export default function HomePage() {
  /*   const [filteredMovies, setFilteredMovies] = useState(); */

  //CB Function to handle search term changes
  const handleChangeFN = (event) => {
    setSearchTerm(event.target.value); // Update the search term state
  };

  //CB Filter the MOVIES_JSON based on the search input
  /* const filteredData = movies.filter((m) =>
    m.title.toLowerCase().includes(searchTerm.toLowerCase())
  ); */

  return (
    <main>
      <h1>Last Movies</h1>
      <section>
        <SearchBar movies={MOVIES_JSON} />
      </section>
      <section>
        <MovieList movies={MOVIES_JSON} />
      </section>
    </main>
  );
}
