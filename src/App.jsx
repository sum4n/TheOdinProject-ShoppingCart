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

  console.log(data);

  const addToCart = (e, data) => {
    setItemsInCart([...itemsInCart, data[e.target.id - 1]]);
    console.log(e);
  };

  return (
    <>
      <NavigationBar itemsInCart={itemsInCart.length} />
      <Outlet context={[data, error, loading, itemsInCart, addToCart]} />
    </>
  );
}

export default App;
