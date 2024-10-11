import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { favorites_Slice_Actions } from "../utils/redux/store";

export default function MovieCard({ movie }) {
  const { title, picture, id } = movie;
  const dispatch = useDispatch();

  function handleAddToFavorites() {
    const copyMovie = { ...movie }; //Copy Object
    dispatch(favorites_Slice_Actions.ADD_PRODUCT(copyMovie));
  }

  return (
    <article>
      <h2>{title}</h2>
      <p>{picture}</p>
      <p>{id}</p>
      <button onClick={handleAddToFavorites}>Add to Favorite List</button>
      <button>
        <Link to={`/Details/${id}`}>Details</Link>
      </button>
    </article>
  );
}
