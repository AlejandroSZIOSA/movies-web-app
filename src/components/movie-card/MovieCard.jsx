import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FAVORITES_SLICE_ACTIONS } from "../../utils/redux/store";
import { BASE_POSTER_URL, TRACKING_GTM_ID } from "../../services/api-host";
import CustomBtn from "../common/Button/CustomBtn";
import "./MovieCard.css";

import ReactGa from "react-ga4";

//Event Listener google tag manager
ReactGa.initialize(TRACKING_GTM_ID);

export default function MovieCard({ movie }) {
  const { id, release_date, poster_path } = movie;

  const favorites = useSelector((state) => state.favorites_.favorite_list);
  const dispatch = useDispatch();

  function handleAddFavorite() {
    if (!checkFavoriteDuplicateId()) {
      ReactGa.event({
        category: "Button",
        action: "Clicked Add to Favorites",
        label: "Add a Favorite",
      });
      const copyMovie = { ...movie }; //Copy Object
      dispatch(FAVORITES_SLICE_ACTIONS.ADD_PRODUCT(copyMovie));
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
    <article className="movie-card__article">
      <p>
        <strong> {release_date}</strong>
      </p>
      <div className="movie-poster__container">
        <img
          src={`${BASE_POSTER_URL}/${poster_path}`}
          width="auto"
          height="auto"
        ></img>
      </div>

      <div className="buttons-container">
        <CustomBtn bgColor="yellow">
          {/* Send an Object to a page  */}
          <Link to="/details" state={{ movie }}>
            Details
          </Link>
        </CustomBtn>
        <CustomBtn
          id="addFavoriteBtn"
          onClickFn={handleAddFavorite}
          bgColor="black"
        >
          Add to Favorites
        </CustomBtn>
      </div>
    </article>
  );
}
