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
            <Link to={"/cart"}> to cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
