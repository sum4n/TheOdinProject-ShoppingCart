import NavigationBar from "./components/NavigationBar/NavigationBar";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [itemsInCart, setItemsInCart] = useState([]);

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

  const addToCart = (e, data) => {
    let clickedItem = data[e.target.id - 1];
    // If item is unique add it to cart, else increase its quantity
    if (!itemsInCart.includes(clickedItem)) {
      // All items gets quantity property with value 1
      clickedItem.quantity = 1;
      setItemsInCart([...itemsInCart, clickedItem]);
    } else {
      let indexOfIncreasedProduct = itemsInCart.indexOf(clickedItem);
      itemsInCart[indexOfIncreasedProduct].quantity += 1;
      setItemsInCart([...itemsInCart]);
    }
    // console.log(clickedItem);
    // console.log(itemsInCart);
  };

  return (
    <>
      <NavigationBar itemsInCart={itemsInCart.length} />
      <Outlet context={[data, error, loading, itemsInCart, addToCart]} />
    </>
  );
}

export default App;
