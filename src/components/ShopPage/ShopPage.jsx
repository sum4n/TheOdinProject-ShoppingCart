import ShopItems from "../ShopItems/ShopItems";
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
        <div>Cart</div>
      </div>
    </div>
  );
};

export default ShopPage;
