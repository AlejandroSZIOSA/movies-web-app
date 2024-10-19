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

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMovies_());
    }
  }, [status, dispatch]);

  if (status === "loading") return <h1>Loading...</h1>;
  if (!MOVIES) return <p>Failed to fetch movie list</p>;
  return (
    <main className="home-main">
      <MetaTags
        title="Home page"
        description="Search and save your favorites latest movies"
      />
      <h1>Latest Movies</h1>
      <div className="search-bar__container">
        <SearchBar movies={MOVIES} />
      </div>
    </main>
  );
}
