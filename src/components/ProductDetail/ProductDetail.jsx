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
  return (
    <div className={styles.shopItem}>
      <img
        className={styles.itemImg}
        src={data[key].image}
        alt="This is shop item"
      />
      <div className={styles.itemText}>
        <p className={styles.itemTitle}>{data[key].title}</p>
        {/* <p>{description}</p> */}
        <p>
          {data[key].rating.rate} of {data[key].rating.count}
        </p>
        <p className={styles.priceText}>Price: {data[key].price}$</p>
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
        <button id={data[key].id} onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </div>
    // <div>ProductDetail</div>
  );
};

export default ProductDetail;
