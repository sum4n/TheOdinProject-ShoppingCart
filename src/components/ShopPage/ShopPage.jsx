import ShopItems from "../ShopItems/ShopItems";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import styles from "./ShopPage.module.css";

const ShopPage = () => {
  return (
    <div className={styles.shopPageBody}>
      <p>This is shop page</p>
      <div className={styles.shopPageContents}>
        <div className={styles.shopPageItems}>
          <ShopItems />
          <ShopItems />
          <ShopItems />
          <ShopItems />
          <ShopItems />
          <ShopItems />
        </div>
        <ShoppingCart />
      </div>
    </div>
  );
};

export default ShopPage;
