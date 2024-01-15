import styles from "./HomePageBody.module.css";
import image from "./shopping_cart.webp";

const HomePageBody = () => {
  return (
    <div className={styles.body}>
      <div className={styles.divText}>
        <p>Welcome to Odin Project Shopping Cart</p>
        <a className={styles.btnShop} href="shopPage">
          Shop
        </a>
      </div>
      <img className={styles.imgHomeBody} src={image} alt="a shopping cart" />
    </div>
  );
};

export default HomePageBody;
