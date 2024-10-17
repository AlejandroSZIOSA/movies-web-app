import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies_ } from "../../utils/redux/store";
import SearchBar from "../../components/search-bar/SearchBar";
import MetaTags from "../../seo/MetaTags";
import "./Home.css";

export default function HomePage() {
  const dispatch = useDispatch();
  const MOVIES = useSelector((state) => state.movies_.movie_list);
  const status = useSelector((state) => state.movies_.status);
  const error = useSelector((state) => state.movies_.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMovies_());
    }
    console.log(MOVIES);
  }, [status, dispatch]);

  if (status === "loading...") {
    return <p>{status}</p>;
  }

  if (status === "failed") {
    return <p>Failed to fetch data: {error}</p>;
  }

  return (
    <main className="home-main">
      <MetaTags title="Home page" description="Search the Latest movies" />
      <h1>Latest Movies 2024</h1>
      <section>
        <SearchBar movies={MOVIES} />
      </section>
    </main>
  );
}
