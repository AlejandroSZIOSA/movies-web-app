import { useNavigate } from "react-router-dom";
import FavoriteList from "../../components/favorite-list/FavoriteList";
import BackBtn from "../../components/common/Button/BackBtn";
import { useSelector } from "react-redux";
import "./Favorites.css";

export default function FavoritesPage() {
  const totalFavorites = useSelector(
    (state) => state.favorites_.favorite_list.length
  );
  const navigate = useNavigate();

  if (totalFavorites == 0) {
    return (
      <main style={{ textAlign: "center" }}>
        <h1>Favorite List is Empty</h1>
      </main>
    );
  }

  return (
    <main className="favorites-container">
      <h1>Favorite List</h1>
      <div className="favorite-table__container">
        <FavoriteList />
      </div>
      <div>
        <BackBtn onClickFn={() => navigate("..")} />
      </div>
    </main>
  );
}
