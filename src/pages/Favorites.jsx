import { useNavigate } from "react-router-dom";
import FavoriteList from "../components/FavoriteList";
import BackBtn from "../components/common/Button/BackBtn";

export default function FavoritesPage() {
  /* const totalProducts = useSelector((state) => state.total_products); */

  const navigate = useNavigate();

  return (
    <main>
      <h1>Favorite List</h1>
      <FavoriteList />
      <BackBtn onClick={() => navigate("..")} />
    </main>
  );
}
