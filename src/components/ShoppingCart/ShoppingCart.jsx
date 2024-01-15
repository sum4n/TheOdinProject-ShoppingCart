import styles from "./ShoppingCart.module.css";

const ShoppingCart = () => {
  return (
    <div className={styles.cartBody}>
      <p>Items in your shopping cart</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
      <p>Total amount: {100} $</p>
      <button className={styles.btnCheckout}>Checkout</button>
    </div>
  );
};

export default ShoppingCart;
