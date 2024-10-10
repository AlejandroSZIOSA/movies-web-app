/* import "./App.css"; */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import DetailsPage from "./pages/Details";
import FavoritesPage from "./pages/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/Details/:movieId",
        element: <DetailsPage />,
      },
      {
        path: "/Favorites",
        element: <FavoritesPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
