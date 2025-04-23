import { Link, useOutletContext } from "react-router-dom";
import styles from "./ShoppingCart.module.css";

const ShoppingCart = () => {
  const { itemsInCart } = useOutletContext();

  // console.log(itemsInCart);

  let total = 0;
  if (itemsInCart.length != 0) {
    for (let i = 0; i < itemsInCart.length; i++) {
      total += itemsInCart[i].price * itemsInCart[i].quantity;
    }
  }

  return (
    <div className={styles.cartBody}>
      <h1>Shopping Cart</h1>
      <ol>
        {itemsInCart.map((item) => {
          return (
            <div key={item.id}>
              <hr />
              <li className={styles.itemList}>
                <img className={styles.itemImage} src={item.image} alt="" />
                <div>
                  <Link
                    to={`/products/${item.id}`}
                    className={styles.itemTitle}
                  >
                    {item.title}
                  </Link>
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
