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
    // get quantity from Input Quantity
    let quantity = parseInt(e.target.previousSibling.children[1].value);
    // If item is unique add it to cart, else increase its quantity
    if (!itemsInCart.includes(clickedItem)) {
      // All items objects gets quantity "property" with value input quantity
      clickedItem.quantity = quantity;
      setItemsInCart([...itemsInCart, clickedItem]);
    } else {
      let indexOfIncreasedProduct = itemsInCart.indexOf(clickedItem);
      itemsInCart[indexOfIncreasedProduct].quantity += quantity;
      setItemsInCart([...itemsInCart]);
    }
    // console.log(e.target.previousSibling.children[1].value);
    // console.log(clickedItem);
    // console.log(itemsInCart);

    // resets the Quantity input value to 1
    e.target.previousSibling.children[1].value = 1;
  };

  let totalItems = 0;
  if (itemsInCart.length != 0) {
    for (let i = 0; i < itemsInCart.length; i++) {
      totalItems += itemsInCart[i].quantity;
    }
  }

  // console.log({ totalItems });

  return (
    <>
      <NavigationBar itemsInCart={totalItems} />
      <Outlet context={[data, error, loading, itemsInCart, addToCart]} />
    </>
  );
}

export default App;
