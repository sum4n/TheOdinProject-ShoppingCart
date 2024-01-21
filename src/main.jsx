import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App.jsx";
import ShopPage from "./components/ShopPage/ShopPage.jsx";
import "./index.css";
import HomePageBody from "./components/HomePageBody/HomePageBody.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import { useState, useEffect } from "react";

// const handleAddToCart = (e) => {
//   const [itemsInCart, setItemsInCart] = useState([]);

//   setItemsInCart([...itemsInCart, data[e.target.id - 1]]);
//   console.lod(itemsInCart);

//   return itemsInCart;
// };

const fetchData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("server error");
        }
        return res.json();
      })
      .then((json) => setData(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  console.log(data);

  return { data, error, loading };
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageBody />,
    errorElement: <ErrorPage />,
  },
  {
    path: "shopPage",
    element: (
      <ShopPage
        fetchData={fetchData}
        // handleAddToCart={handleAddToCart}
        // itemsInCart={itemsInCart}
      />
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
