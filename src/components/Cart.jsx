import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";
import "./Cart.css";

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart } = useCart();
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden></input>
      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <img alt={product.title} src={product.thumbnail}></img>
              <div>
                <strong>{product.title}</strong> -${product.price}
              </div>
              <footer>
                <small>Qty: {product.quantity} </small>
                <button onClick={() => addToCart(product)}>+</button>
              </footer>
            </li>
          ))}
        </ul>
        <button onClick={() => clearCart()}>
          <ClearCartIcon />
        </button> 
      </aside>
    </>
  );
}
