import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <nav className={styles.nav}>
      <p className={styles.title}>The shopping project</p>
      <ul className={styles.list}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <p>Cart: {0}</p>
    </nav>
  );
};

export default NavigationBar;
