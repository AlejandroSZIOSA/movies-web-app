import { Link } from "react-router-dom";
export default function NavigationMenu() {
  return (
    <>
      <ul>
        <li>
          <Link to={"/Favorites"}> to Favorites list</Link>
        </li>
        <li>
          <Link to={"/"}> To last movies</Link>
        </li>
      </ul>
    </>
  );
}
