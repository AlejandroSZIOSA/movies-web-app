import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { favorites_Slice_Actions } from "../utils/redux/store";
import { BASE_URL } from "../services/api-host";

export default function MovieCard({ movie }) {
  const { id, title, overview, release_date } = movie;

  const baseImageUrl = "https://image.tmdb.org/t/p/w500"; // Poster image :)

  const favorites = useSelector((state) => state.favorites_.favorite_list);
  const dispatch = useDispatch();

  function handleAddFavorite() {
    if (!checkFavoriteDuplicateId()) {
      const copyMovie = { ...movie }; //Copy Object
      dispatch(favorites_Slice_Actions.ADD_PRODUCT(copyMovie));
    }
  }

  function checkFavoriteDuplicateId() {
    let isDuplicate = false;
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].id === id) {
        isDuplicate = true;
        break;
      }
    }
    return isDuplicate;
  }

  return (
    <article>
      <h2>{title}</h2>
      <p>{release_date}</p>
      <button onClick={handleAddFavorite}>Add to Favorite List</button>
      <button>
        {/* <Link to={`/details/${id}/${title}/${overview}`}>Details</Link> */}
        <Link to="/details" state={{ movie }}>
          Details
        </Link>
      </button>
    </article>
  );
}
