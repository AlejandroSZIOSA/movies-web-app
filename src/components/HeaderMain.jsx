import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function HeaderMain() {
  const totalProducts = useSelector((state) => state.total_products);

  return (
    <header>
      <p>header {totalProducts}</p>
      <nav>
        <ul>
          <li>
            <Link to={"/Favorites"}> to Favorites list</Link>
          </li>
          <li>
            <Link to={"/"}> To last movies</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
