import { useSelector, useDispatch } from "react-redux";
import { FAVORITES_SLICE_ACTIONS } from "../../utils/redux/store";
import "./FavoriteList.css";

export default function FavoriteList() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites_.favorite_list);

  function handleRemoveFavorite(movieId) {
    dispatch(FAVORITES_SLICE_ACTIONS.REMOVE_FAVORITE(movieId)); //works :)
  }

  return (
    <>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Title</th>
            <th>Release Date</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {favorites.map((m) => (
            <tr key={m.id}>
              <td>{m.title}</td>
              <td>{m.release_date}</td>
              <td>
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveFavorite(m.id)}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
