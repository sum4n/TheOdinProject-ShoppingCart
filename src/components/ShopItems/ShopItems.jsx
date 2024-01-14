import styles from "./ShopItems.module.css";

const ShopItems = () => {
  return (
    <div className={styles.shopItem}>
      <p className={styles.itemTitle}>Title</p>
      <img className={styles.itemImg} src="#" alt="This is shop item" />
      <div>
        <label className={styles.inputLabel} htmlFor="quantity">
          Quantity
        </label>
        <input
          className={styles.inputBox}
          type="number"
          id="quantity"
          name="quantity"
          max={10}
          min={1}
          defaultValue={1}
        />
      </div>
      <button>Add to cart</button>
    </div>
  );
};

export default ShopItems;
