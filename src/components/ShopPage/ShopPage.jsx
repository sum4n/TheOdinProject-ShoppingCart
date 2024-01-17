import ShopItems from "../ShopItems/ShopItems";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import styles from "./ShopPage.module.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import { useEffect, useState } from "react";

const ShopPage = () => {
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

  if (data) {
    console.log(data);
  }

  const handleAddToCart = (e) => {
    // don't mutate the array
    setItemsInCart([...itemsInCart, data[e.target.id - 1]]);
    console.log(itemsInCart);
  };

  return (
    <>
      <NavigationBar itemsInCart={itemsInCart.length} />
      <div className={styles.shopPageBody}>
        <div className={styles.shopPageContents}>
          <div className={styles.shopPageItems}>
            {error && <p>A network error was encountered.</p>}
            {loading && <p>Loading...</p>}

            {data &&
              data.map((item) => {
                return (
                  <ShopItems
                    key={item.id}
                    index={item.id}
                    title={item.title}
                    description={item.description}
                    rating={item.rating}
                    price={item.price}
                    imgSource={item.image}
                    handleAddToCart={handleAddToCart}
                  />
                );
              })}
          </div>
          <ShoppingCart cartItems={itemsInCart} />
        </div>
      </div>
    </>
  );
};

export default ShopPage;
