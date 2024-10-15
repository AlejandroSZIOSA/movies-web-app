import { Link } from "react-router-dom";
import "/src/styles/navigationMenu.css";

export default function NavigationMenu() {
  return (
    <>
      <ul className="nav-list-container">
        <li>
          <Link to={"/"}> Home</Link>
        </li>
        <li>
          <Link to={"/favorites"}> Favorites</Link>
        </li>
      </ul>
    </>
  );
}
