import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/index.css";
import TransactionsHome from "./TransactionsHome";
import TransactionsDetails from "./TransactionsDetails";

const container = document.getElementById("js-framework-home");
const root = ReactDOM.createRoot(container);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="transactions" element={<TransactionsHome />} />
      <Route path="transactions/details/:year/:month" element={<TransactionsDetails />} />
    </Routes>
  </BrowserRouter>
);
