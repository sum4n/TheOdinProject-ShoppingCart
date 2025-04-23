import { useOutletContext, useParams } from "react-router-dom";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const { data, error, loading, addToCart } = useOutletContext();

  // NaN == Nan is false -_-
  if (!Number(productId)) {
    return (
      <div className={styles.shopItemError}>
        <p>Invalid URL...</p>
      </div>
    );
  }

  if (data === null && loading) {
    return (
      <div className={styles.shopItemError}>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.shopItemError}>
        <p>A network error was encountered.</p>
      </div>
    );
  }

  const key = parseInt(productId) - 1;
  // console.log({ key });

  // This line was causing problem on reload or on typing '/products/2' (2 is any product id).
  // Because during reload js was coming here before feting the data, causing error.
  // Either use data[key] in jsx directly or use error handling logic the way it is written from top of this page.
  const product = data[key];
  // console.log(product);

  if (data && product === undefined) {
    return (
      <div className={styles.shopItemError}>
        <p>Product not found...</p>
      </div>
    );
  }

  return (
    <>
      {error && <p>A network error was encountered.</p>}
      {loading && <p>Loading...</p>}
      {data && (
        <div className={styles.shopItem}>
          <img
            className={styles.itemImg}
            src={product.image}
            alt="This is shop item"
          />
          <div className={styles.itemText}>
            <p className={styles.itemTitle}>{product.title}</p>
            <p>{product.description}</p>
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
            <button
              className={styles.button}
              onClick={() => {
                let quantity = document.getElementById("quantity").value;

                addToCart(product, quantity);

                alert(`${product.title} x ${quantity} added to cart`);
                // reset input box's value to 1
                document.getElementById("quantity").value = 1;
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      )}
    </>
    // <div>ProductDetail</div>
  );
};

export default ProductDetail;
