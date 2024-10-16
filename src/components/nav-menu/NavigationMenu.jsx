import { Link } from "react-router-dom";
import "./NavigationMenu.css";

export default function NavigationMenu() {
  return (
    <>
      <ul className="nav-list__items">
        <li className="nav-list__item">
          <Link to={"/"}> Home</Link>
        </li>
        <li className="nav-list__item">
          <Link to={"/favorites"}> Favorites</Link>
        </li>
      </ul>
    </>
  );
}
