import React from "react";
import { useSelector } from "react-redux";
import NavigationMenu from "./NavigationMenu";

export default function HeaderMain() {
  const totalProducts = useSelector((state) => state.total_products);

  return (
    <header>
      <p>header {totalProducts}</p>
      <NavigationMenu />
    </header>
  );
}
