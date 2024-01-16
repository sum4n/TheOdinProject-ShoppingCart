import styles from "./ShopItems.module.css";

const ShopItems = ({ title, price, imgSource }) => {
  return (
    <div className={styles.shopItem}>
      <p className={styles.itemTitle}>{title}</p>
      <img className={styles.itemImg} src={imgSource} alt="This is shop item" />
      <p className={styles.priceText}>Price: {price}</p>
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
