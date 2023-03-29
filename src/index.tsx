import React from "react";
import { createRoot } from "react-dom/client";
import { Homepage } from "./components";
import "./index.css";

const App = () => {
  return (
    <>
      <Homepage />
    </>
  );
};

const container = document.getElementById("root");
const root = container ? createRoot(container) : null;

if (root) {
  root.render(<App />);
}
