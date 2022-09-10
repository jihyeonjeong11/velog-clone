import React from "react";
import App from "./src/App";
import "./index.css";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App tab="home" />
    </HelmetProvider>
  </React.StrictMode>
);
