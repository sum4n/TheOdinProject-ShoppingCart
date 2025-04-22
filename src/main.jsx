import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import ProductsPage from "./components/ProductsPage/ProductsPage.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import ProductDetail from "./components/ProductDetail/ProductDetail.jsx";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetail /> },
      { path: "cart", element: <ShoppingCart /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
