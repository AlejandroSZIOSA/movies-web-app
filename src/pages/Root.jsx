import { Outlet, useLocation } from "react-router-dom";
import HeaderMain from "../components/header/HeaderMain";
import { useEffect } from "react";

import ReactGa from "react-ga4";

import { TRACKING_ID } from "../services/api-host";
ReactGa.initialize(TRACKING_ID);

export default function RootLayout() {
  console.log("RootLayout");
  const location = useLocation();
  useEffect(() => {
    //Track and Send the location when location changes
    ReactGa.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);

  return (
    <>
      <HeaderMain />
      <Outlet />
    </>
  );
}
