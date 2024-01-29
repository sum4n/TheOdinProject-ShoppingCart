import styles from "./ShoppingCart.module.css";

const ShoppingCart = ({ cartItems }) => {
  // console.log(cartItems);

  let total = 0;
  if (cartItems.length != 0) {
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].price * cartItems[i].quantity;
    }
  }

  return (
    <div className={styles.cartBody}>
      <p>Items in your shopping cart</p>
      <ol>
        {cartItems.map((item) => {
          return (
            <li key={item.id}>
              {item.title}
              {" X"}
              {item.quantity}
            </li>
          );
        })}
      </ol>
      <p>Total amount: {Math.round(total * 100) / 100}$</p>
      <button className={styles.btnCheckout}>Checkout</button>
    </div>
  );
};

export default ShoppingCart;
