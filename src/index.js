import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./storeTokens/Auth-Context";
import { CookiesProvider } from "react-cookie";
ReactDOM.render(
  <AuthContextProvider>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);
