import { Link, useOutletContext } from "react-router-dom";
import styles from "./ProductsPage.module.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import { useNavigate } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";

const ProductsPage = () => {
  const { data, error, loading, itemsInCart, addToCart } = useOutletContext();

  return (
    <>
      <div className={styles.shopPageBody}>
        <div className={styles.shopPageContents}>
          <div className={styles.shopPageItems}>
            {error && <p>A network error was encountered.</p>}
            {loading && <p>Loading...</p>}

            {data &&
              data.map((item) => {
                return (
                  <Product
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
          {/* <ShoppingCart cartItems={itemsInCart} /> */}
        </div>
      </div>
    </>
  );
};

const Product = ({
  title,
  index,
  description,
  rating,
  price,
  imgSource,
  handleAddToCart,
}) => {
  return (
    <Link to={`/products/${index}`}>
      <div className={styles.productStyle}>
        <img
          className={styles.productImg}
          src={imgSource}
          alt="This is shop item"
        />
        <div className={styles.productText}>
          <p className={styles.productTitle}>{title}</p>
          {/* <p>{description}</p> */}
          <p>
            {rating.rate} of {rating.count}
          </p>
          <p className={styles.priceText}>Price: {price}$</p>
          {/* <div>
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
        <button id={index} onClick={handleAddToCart}>
          Add to cart
        </button> */}
        </div>
      </div>
    </Link>
  );
};

export default ProductsPage;
