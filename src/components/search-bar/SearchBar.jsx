import { useState } from "react";
import MovieList from "../movie-list/MovieList";

export default function SearchBar({ movies }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle search term changes
  const handleChange = (event) => {
    setSearchTerm(event.target.value); // Update the search term state
  };

  // Filter the MOVIES_JSON based on the search input
  const filteredMovies = movies.filter((m) =>
    m.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange} // Call handleChange on input change
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
}
