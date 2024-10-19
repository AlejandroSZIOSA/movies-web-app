import { Outlet, useLocation } from "react-router-dom";
import HeaderMain from "../components/header/HeaderMain";
import { useEffect } from "react";

import ReactGa from "react-ga4";
import { TRACKING_ID } from "../services/api-host";

// Initialize Google Analytics
ReactGa.initialize(TRACKING_ID);

//IMPORTANT: This component is use It in the App.jsx
export default function RootLayout() {
  /* console.log("In the RootLayout"); */
  const location = useLocation();
  useEffect(() => {
    //Track and Send the location to Google Analytics when location changes
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
