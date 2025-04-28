import { Link, useOutletContext, useParams } from "react-router-dom";
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
            {!product.quantity ? (
              <button
                className={styles.button}
                onClick={() => {
                  addToCart(product, 1);
                  alert(`${product.title} added to cart`);
                  // console.log(product);
                }}
              >
                Add to cart
              </button>
            ) : (
              <>
                <p>Product added to cart.</p>
                <Link to={"/cart"} className={styles.goToCart}>
                  Go to cart
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
