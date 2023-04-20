import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createGlobalStyle } from "styled-components";

const GlobalComponent = createGlobalStyle`
html, body{
  font-size:62.5%
}

body{
  font-size:1.6rem
}
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
