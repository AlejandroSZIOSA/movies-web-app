import MovieCard from "../movie-card/MovieCard";
import "./MovieList.css";

export default function MovieList({ movies }) {
  return (
    <>
      <ul className="movies-list__container">
        {movies.map((m) => (
          <li className="movie-list-item" key={m.id}>
            <MovieCard movie={m} />
          </li>
        ))}
      </ul>
    </>
  );
}
