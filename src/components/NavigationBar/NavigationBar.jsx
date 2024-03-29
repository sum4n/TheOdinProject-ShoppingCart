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
          {/* '/shopPage' is needed because only 'shopPage' 
          makes /shopPage/shopPage link which is invalid */}
          <Link to="/productsPage">Products</Link>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <Link to="/shoppingCart">Cart: {totalItemsInCart}</Link>
        </li>
      </ul>
      {/* <p>Cart: {totalItemsInCart}</p> */}
    </nav>
  );
};

export default NavigationBar;
