import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./i18n/i18n.js";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find the root element. Check that index.html has a <div id=\"root\"></div>.");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);