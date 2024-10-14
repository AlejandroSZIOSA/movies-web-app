import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetch_movies } from "../utils/redux/store";
import SearchBar from "../components/SearchBar";

export default function HomePage() {
  const dispatch = useDispatch();
  const MOVIES = useSelector((state) => state.movies_.movie_list);
  const status = useSelector((state) => state.movies_.status);
  /* const error = useSelector((state) => state.movies_.error); */

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetch_movies());
    }
    console.log(MOVIES);
  }, [status, dispatch]);

  if (status === "loading" || status === "failed") {
    return <p>{status}</p>;
  }

  return (
    <main>
      <h1>Latest Movies</h1>

      <section>
        <SearchBar movies={MOVIES} />
      </section>
    </main>
  );
}
