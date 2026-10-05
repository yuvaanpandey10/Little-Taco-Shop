import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

const navigation = performance.getEntriesByType("navigation")[0];
const currentPage = document.body.dataset.page;

if (navigation?.type === "reload" && currentPage !== "home") {
  window.location.replace(new URL("./index.html", window.location.href));
} else {
  createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
