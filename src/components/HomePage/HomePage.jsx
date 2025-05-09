import styles from "./HomePage.module.css";
import image from "./shopping_cart.webp";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.divText}>
          <p>Welcome to Odin Project Shopping Cart</p>
          <Link className={styles.btnShop} to="products">
            Shop
          </Link>
        </div>
        <img className={styles.imgHomeBody} src={image} alt="a shopping cart" />
      </div>
    </>
  );
};

export default HomePage;
