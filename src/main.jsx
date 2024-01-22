import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ShopPage from "./components/ShopPage/ShopPage.jsx";
import "./index.css";
import HomePageBody from "./components/HomePageBody/HomePageBody.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import { useState, useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
