import { useState } from "react";
import MovieList from "../movie-list/MovieList";
import "./SearchBar.css";

export default function SearchBar({ movies }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredMovies = movies.filter((m) =>
    m.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <MovieList movies={filteredMovies} />
    </>
  );
}
