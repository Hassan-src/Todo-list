import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./styles/global.css";
import "./styles/scrollbar.css";
import "./styles/variables.css";
import "./styles/responsive.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
