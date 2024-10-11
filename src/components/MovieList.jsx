import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  return (
    <>
      <ul>
        {movies.map((m) => (
          <li key={m.id}>
            <MovieCard movie={m} />
          </li>
        ))}
      </ul>
    </>
  );
}
