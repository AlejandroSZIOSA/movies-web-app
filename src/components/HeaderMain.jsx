import React from "react";
import { useSelector } from "react-redux";

export default function HeaderMain() {
  const totalProducts = useSelector((state) => state.total_products);

  return <div>header {totalProducts}</div>;
}
