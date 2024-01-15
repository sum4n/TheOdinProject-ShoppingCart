import styles from "./HomePageBody.module.css";
import image from "./shopping_cart.webp";
import { Link } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";

const HomePageBody = () => {
  return (
    <>
      <NavigationBar />
      <div className={styles.body}>
        <div className={styles.divText}>
          <p>Welcome to Odin Project Shopping Cart</p>
          <Link className={styles.btnShop} to="shopPage">
            Shop
          </Link>
        </div>
        <img className={styles.imgHomeBody} src={image} alt="a shopping cart" />
      </div>
    </>
  );
};

export default HomePageBody;
