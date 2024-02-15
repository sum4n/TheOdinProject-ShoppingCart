import styles from "./NavigationBar.module.css";
import { Link } from "react-router-dom";

const NavigationBar = ({ totalItemsInCart }) => {
  return (
    <nav className={styles.nav}>
      <p className={styles.title}>The shopping project</p>
      <ul className={styles.list}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="shopPage">Products</Link>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <p>Cart: {totalItemsInCart}</p>
    </nav>
  );
};

export default NavigationBar;
