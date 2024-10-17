import { useNavigate } from "react-router-dom";
import FavoriteList from "../../components/favorite-list/FavoriteList";
import BackBtn from "../../components/common/Button/CustomBtn";
import { useSelector } from "react-redux";
import "./Favorites.css";

export default function FavoritesPage() {
  const totalFavorites = useSelector(
    (state) => state.favorites_.favorite_list.length
  );
  const navigate = useNavigate();

  if (totalFavorites == 0) {
    return (
      <main>
        <h1 style={{ textAlign: "center" }}>Empty List</h1>
      </main>
    );
  }

  return (
    <main className="favorites-container">
      <h1>Favorite List</h1>
      <div className="favorite-table__container">
        <FavoriteList />
      </div>
      <div className="favorites-button__container">
        <BackBtn onClickFn={() => navigate("..")} bgColor="green">
          Go Back
        </BackBtn>
      </div>
    </main>
  );
}
