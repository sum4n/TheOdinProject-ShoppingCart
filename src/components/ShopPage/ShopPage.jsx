import ShopItems from "../ShopItems/ShopItems";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import styles from "./ShopPage.module.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import { useEffect, useState } from "react";

const ShopPage = ({ fetchData, handleAddToCart }) => {
  const { data, error, loading } = fetchData();

  const { itemsInCart, addToCart } = handleAddToCart();

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
                    handleAddToCart={(e) => addToCart(e, data)}
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
