import { useNavigate } from "react-router-dom";
import FavoriteList from "../components/FavoriteList";

export default function FavoritesPage() {
  /* const totalProducts = useSelector((state) => state.total_products); */

  const navigate = useNavigate();

  return (
    <main>
      <h1>Favorite List</h1>
      <FavoriteList />
      <button onClick={() => navigate("..")}> Go back</button>
    </main>
  );
}
