import { useSelector } from "react-redux";
import NavigationMenu from "./NavigationMenu";

export default function HeaderMain() {
  const totalFavorites = useSelector(
    (state) => state.favorites_.favorite_list.length
  );

  return (
    <header>
      <p>header {totalFavorites}</p>
      <NavigationMenu />
    </header>
  );
}
