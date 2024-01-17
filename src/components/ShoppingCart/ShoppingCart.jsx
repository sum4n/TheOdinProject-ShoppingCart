import styles from "./ShoppingCart.module.css";

const ShoppingCart = ({ cartItems }) => {
  return (
    <div className={styles.cartBody}>
      <p>Items in your shopping cart</p>
      <ol>
        {cartItems.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ol>
      <p>Total amount: {100} $</p>
      <button className={styles.btnCheckout}>Checkout</button>
    </div>
  );
};

export default ShoppingCart;
