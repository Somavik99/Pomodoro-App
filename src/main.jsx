import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalComponent = createGlobalStyle`
html, body{
  font-size:62.5%;
}

body{
  font-size:1.6rem;
}
`;

const theme  = {
    colors:{
      primary: "#2a2a2a",
      secondary: "#000000",
      bg: "#FFFFFF"
    }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
