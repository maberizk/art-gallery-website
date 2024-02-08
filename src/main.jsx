import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Location from "./Location";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="*" element={<App />} />
      <Route path="/location" element={<Location />} />
    </Routes>
  </Router>
);
