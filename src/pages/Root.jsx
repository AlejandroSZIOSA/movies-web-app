import { Outlet } from "react-router-dom";
import HeaderMain from "../components/header/HeaderMain";

export default function RootLayout() {
  return (
    <>
      <HeaderMain />
      <Outlet />
    </>
  );
}
