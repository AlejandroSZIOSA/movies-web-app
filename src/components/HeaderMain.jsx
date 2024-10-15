import { useSelector } from "react-redux";
import NavigationMenu from "./NavigationMenu";
import favoriteIcon from "/src/assets/favorite-icon.svg";
import { tmdbLogo } from "../assets/tmdb-logo-svg";
import "/src/styles/headerMain.css";

export default function HeaderMain() {
  const totalFavorites = useSelector(
    (state) => state.favorites_.favorite_list.length
  );

  return (
    <header className="main-header">
      <div>
        <img src={`${tmdbLogo}`} alt="logo" width="80" height="auto" />
      </div>
      <div className="nav-container">
        <NavigationMenu />
      </div>
      <div className="menu-container">
        <img src={favoriteIcon} alt="Favorite Icon" />
        <p> = {totalFavorites}</p>
      </div>
    </header>
  );
}
