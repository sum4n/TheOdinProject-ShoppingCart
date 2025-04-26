import styles from "./NavigationBar.module.css";
import { Link } from "react-router-dom";

const NavigationBar = ({ totalItemsInCart }) => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.title} to="/">
        The shopping project
      </Link>
      <ul className={styles.list}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="products">Products</Link>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <Link to="cart">Cart: {totalItemsInCart}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
