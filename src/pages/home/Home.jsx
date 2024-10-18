import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies_ } from "../../utils/redux/store";
import SearchBar from "../../components/search-bar/SearchBar";
import MetaTags from "../../seo/MetaTags";
import "./Home.css";
/* 
import { useLocation } from "react-router-dom";
import ReactGa from "react-ga4";
import { TRACKING_ID } from "../../services/api-host";
ReactGa.initialize(TRACKING_ID); 
 */
export default function HomePage() {
  const dispatch = useDispatch();
  const MOVIES = useSelector((state) => state.movies_.movie_list);
  const status = useSelector((state) => state.movies_.status);
  const error = useSelector((state) => state.movies_.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMovies_());
    }
  }, [status, dispatch]);

  /* const location = useLocation();
  useEffect(() => {
    //Track and Send the location when location changes
    ReactGa.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]); */

  if (status === "loading...") {
    return <p>{status}</p>;
  }

  if (status === "failed") {
    return <p>Failed to fetch data: {error}</p>;
  }

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
