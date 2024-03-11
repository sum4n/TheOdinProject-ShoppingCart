import styles from "./ProductDetail.module.css";

// const handleAddToCart = () => {
//   console.log("hello");
// };

const ProductDetail = ({ data, addToCart }) => {
  console.log(data[0].title);
  return (
    <div className={styles.shopItem}>
      <img
        className={styles.itemImg}
        src={data[0].image}
        alt="This is shop item"
      />
      <div className={styles.itemText}>
        <p className={styles.itemTitle}>{data[0].title}</p>
        {/* <p>{description}</p> */}
        <p>
          {data[0].rating.rate} of {data[0].rating.count}
        </p>
        <p className={styles.priceText}>Price: {data[0].price}$</p>
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
        <button id={data[0].id} onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </div>
    // <div>ProductDetail</div>
  );
};

export default ProductDetail;
