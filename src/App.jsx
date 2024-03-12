import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import ProductDetail from "./components/ProductDetail/ProductDetail";

function App() {
  // using fallback value 'home' for the destructured params object
  // this will show the home page by default
  const { name = "home" } = useParams();

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
      itemsInCart[indexOfProduct].quantity += quantity;
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

  // Render HomePageBody by default
  // If route param is 'shopPage', render ShopPage
  // Else (it will be bad route), render ErrorPage
  return (
    <>
      <NavigationBar totalItemsInCart={totalItemsInCart} />
      {name === "home" ? (
        <HomePage />
      ) : name === "productsPage" ? (
        <ProductsPage
          data={data}
          error={error}
          loading={loading}
          itemsInCart={itemsInCart}
          addToCart={addToCart}
        />
      ) : name == "shoppingCart" ? (
        <ShoppingCart cartItems={itemsInCart} />
      ) : name == "productDetail" ? (
        <ProductDetail data={data} addToCart={addToCart} />
      ) : (
        <ErrorPage />
      )}
    </>
  );
}

export default App;
