import styles from "./ShopItems.module.css";

const ShopItems = ({ title, description, rating, price, imgSource }) => {
  return (
    <div className={styles.shopItem}>
      <img className={styles.itemImg} src={imgSource} alt="This is shop item" />
      <div>
        <p className={styles.itemTitle}>{title}</p>
        <p>{description}</p>
        <p>
          {rating.rate} of {rating.count}
        </p>
        <p className={styles.priceText}>Price: {price}$</p>
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
    </div>
  );
};

export default ShopItems;
