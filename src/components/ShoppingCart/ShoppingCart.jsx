import styles from "./ShoppingCart.module.css";

const ShoppingCart = ({ cartItems }) => {
  console.log(cartItems);

  let total = 0;
  if (cartItems.length != 0) {
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].price * cartItems[i].quantity;
    }
  }

  return (
    <div className={styles.cartBody}>
      <h1>Shopping Cart</h1>
      <ol>
        {cartItems.map((item) => {
          return (
            <div key={item.id}>
              <hr />
              <li className={styles.itemList}>
                <img className={styles.itemImage} src={item.image} alt="" />
                <div>
                  <p>{item.title} </p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: {item.quantity * item.price}$</p>
                </div>
              </li>
            </div>
          );
        })}
        <hr />
      </ol>
      <p>Total amount: {Math.round(total * 100) / 100}$</p>
      <button className={styles.btnCheckout}>Checkout</button>
    </div>
  );
};

export default ShoppingCart;
