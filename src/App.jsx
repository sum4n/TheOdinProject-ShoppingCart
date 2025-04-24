import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [itemsInCart, setItemsInCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setData(null);
      })
      .finally(() => setLoading(false));
  }, []);

  const addToCart = (product, quantity) => {
    quantity = parseInt(quantity);
    // If item is unique add it to cart, else increase its quantity
    if (!itemsInCart.includes(product)) {
      // All items objects gets quantity "property" with value input quantity
      product.quantity = quantity;
      setItemsInCart([...itemsInCart, product]);
    } else {
      let indexOfProduct = itemsInCart.indexOf(product);
      itemsInCart[indexOfProduct].quantity = quantity;
      setItemsInCart([...itemsInCart]);
    }
  };

  let totalItemsInCart = 0;
  if (itemsInCart.length != 0) {
    for (let i = 0; i < itemsInCart.length; i++) {
      totalItemsInCart += itemsInCart[i].quantity;
    }
  }

  // console.log({ totalItemsInCart });

  return (
    <>
      <NavigationBar totalItemsInCart={totalItemsInCart} />
      <Outlet
        context={{
          data,
          error,
          loading,
          itemsInCart,
          addToCart,
        }}
      />
    </>
  );
}

export default App;
