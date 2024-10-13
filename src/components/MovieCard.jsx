import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { favorites_Slice_Actions } from "../utils/redux/store";

export default function MovieCard({ movie }) {
  const { id, title, picture } = movie;

  const favorites = useSelector((state) => state.favorite_list);
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
      <p>{picture}</p>
      <p>{id}</p>
      <button onClick={handleAddFavorite}>Add to Favorite List</button>
      <button>
        <Link to={`/details/${id}/${title}`} query:movie>
          Details
        </Link>
      </button>
    </article>
  );
}
