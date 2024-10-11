import { useSelector, useDispatch } from "react-redux";
import { favorites_Slice_Actions } from "../utils/redux/store";

export default function FavoriteList() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite_list);

  function handleRemoveFavorite(movieId) {
    dispatch(favorites_Slice_Actions.REMOVE_FAVORITE(movieId)); //works :)
  }

  return (
    <>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Title</th>
            <th>Picture</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {favorites.map((m) => (
            <tr key={m.id}>
              <td>{m.title}</td>
              <td>{m.picture}</td>
              <td>
                <button onClick={() => handleRemoveFavorite(m.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
