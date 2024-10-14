import SearchBar from "../components/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetch_movies } from "../utils/redux/store";

export default function HomePage() {
  /*   const MOVIES = useSelector((state) => state.movies_.movie_list); */

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies_.movie_list);
  const status = useSelector((state) => state.movies_.status);
  const error = useSelector((state) => state.movies_.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetch_movies());
    }
    console.log(movies);
  }, [status, dispatch]);

  if (status === "loading") {
    return <p>Loading movies list...</p>;
  }

  return (
    <main>
      <h1>Last Movies</h1>

      <section>
        {/* <SearchBar movies={MOVIES} /> */}

        <ul>
          {movies.map((m) => (
            <li key={m.id}>
              <p>{m.original_title}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
