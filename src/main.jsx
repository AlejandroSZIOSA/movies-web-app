import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store_ from "./utils/redux/store.js";
import { HelmetProvider } from "react-helmet-async";

import { TRACKING_GTM_ID } from "./services/api-host.js";
import TagManager from "react-gtm-module";

//Created object then will pass as argument to the Tag manager.initialize method
const tagManagerArgs = {
  gtmId: TRACKING_GTM_ID,
};
//Connect to Google Tag manager
TagManager.initialize(tagManagerArgs);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store_}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>
  </StrictMode>
);
