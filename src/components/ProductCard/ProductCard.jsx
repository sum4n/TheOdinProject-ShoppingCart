import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

const ProductCard = ({ title, index, rating, price, imgSource }) => {
  return (
    <Link to={`/products/${index}`}>
      <div className={styles.productStyle}>
        <img className={styles.productImg} src={imgSource} alt={title} />
        <div className={styles.productText}>
          <p className={styles.productTitle}>{title}</p>
          <p>
            {rating.rate} of {rating.count}
          </p>
          <p className={styles.priceText}>Price: {price}$</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
