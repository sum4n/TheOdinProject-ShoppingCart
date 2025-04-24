import { Link, useOutletContext } from "react-router-dom";
import styles from "./ShoppingCart.module.css";

const ShoppingCart = () => {
  const { itemsInCart, addToCart, deleteFromCart } = useOutletContext();

  // console.log(itemsInCart);

  let total = 0;
  if (itemsInCart.length != 0) {
    for (let i = 0; i < itemsInCart.length; i++) {
      total += itemsInCart[i].price * itemsInCart[i].quantity;
    }
  }

  function inputHandler(item, quantity) {
    if (Number(quantity) && parseInt(quantity) > 0 && parseInt(quantity) < 11) {
      addToCart(item, quantity);
    } else {
      alert("Invalid input");
    }
  }

  function handleIncrement(item, quantity) {
    if (parseInt(quantity) < 10) {
      addToCart(item, quantity + 1);
    } else {
      alert("Can not add more than 10 of the same item.");
    }
  }
  function handleDecrement(item, quantity) {
    if (parseInt(quantity) > 1) {
      addToCart(item, quantity - 1);
    }
  }

  function handleDeleteFromCart(item) {
    if (confirm("Do you want to delete this item?")) {
      deleteFromCart(item);
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
                  <p>Price: {item.price}$</p>
                  <div>
                    <label className={styles.inputLabel} htmlFor="quantity">
                      Quantity
                    </label>
                    <input
                      className={styles.inputBox}
                      type="number"
                      id="quantity"
                      name="quantity"
                      max={10}
                      min={1}
                      // defaultValue={1}
                      value={item.quantity}
                      onChange={(event) =>
                        inputHandler(item, event.target.value)
                      }
                    />
                    <button
                      onClick={() => handleIncrement(item, item.quantity)}
                      className={styles.btnQuantity}
                      // disabled={item.quantity}
                    >
                      +
                    </button>
                    {item.quantity > 1 ? (
                      <button
                        onClick={() => handleDecrement(item, item.quantity)}
                        className={styles.btnQuantity}
                      >
                        -
                      </button>
                    ) : (
                      <button
                        onClick={() => handleDeleteFromCart(item)}
                        className={styles.btnDelete}
                      >
                        Remove from cart
                      </button>
                    )}
                  </div>
                  <p>Total price: {item.quantity * item.price}$</p>
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
