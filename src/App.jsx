/* import "./App.css"; */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import ProductDetailsPage from "./pages/ProductDetails";
import CartPage from "./pages/Cart";
import HomePage from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/productDetails",
        element: <ProductDetailsPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
