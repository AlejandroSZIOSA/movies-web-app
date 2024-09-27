import React from "react";

import { Outlet } from "react-router-dom";

import FooterMain from "../components/FooterMain";
import HeaderMain from "../components/HeaderMain";

export default function RootLayout() {
  return (
    <>
      <HeaderMain />
      <Outlet />
    </>
  );
}
