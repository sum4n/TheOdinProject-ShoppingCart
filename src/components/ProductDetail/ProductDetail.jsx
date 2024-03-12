import { useLocation } from "react-router-dom";
import styles from "./ProductDetail.module.css";

// const handleAddToCart = () => {
//   console.log("hello");
// };

const ProductDetail = ({ data, addToCart }) => {
  // Gets the state, passed by useNavigate hook.
  const location = useLocation();
  // console.log(location.state.key);
  const key = parseInt(location.state.key) - 1;
  // console.log({ key });
  const product = data[key];
  // console.log(product);

  return (
    <div className={styles.shopItem}>
      <img
        className={styles.itemImg}
        src={product.image}
        alt="This is shop item"
      />
      <div className={styles.itemText}>
        <p className={styles.itemTitle}>{product.title}</p>
        {/* <p>{description}</p> */}
        <p>
          {product.rating.rate} of {product.rating.count}
        </p>
        <p className={styles.priceText}>Price: {product.price}$</p>
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
        <button id={product.id} onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </div>
    // <div>ProductDetail</div>
  );
};

export default ProductDetail;
