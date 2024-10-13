import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Provider } from "react-redux";
import store_ from "./utils/redux/store.js";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store_}>
      <App />
    </Provider>
  </StrictMode>
);
