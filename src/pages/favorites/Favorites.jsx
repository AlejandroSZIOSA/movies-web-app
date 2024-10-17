import { useNavigate } from "react-router-dom";
import FavoriteList from "../../components/favorite-list/FavoriteList";
import BackBtn from "../../components/common/Button/BackBtn";
import { useSelector } from "react-redux";

export default function FavoritesPage() {
  const totalFavorites = useSelector(
    (state) => state.favorites_.favorite_list.length
  );
  const navigate = useNavigate();

  if (totalFavorites == 0) {
    return (
      <main>
        <h1>Favorite List is Empty</h1>
      </main>
    );
  }

  return (
    <main className="container">
      <h1>Favorite List</h1>
      <FavoriteList />
      <div>
        <BackBtn onClickFn={() => navigate("..")} />
      </div>
    </main>
  );
}
