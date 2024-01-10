import "./Footer.css";
import { useFilters } from "../hooks/useFilters.js";
import { useCart } from "../hooks/useCart.js";
export function Footer() {
  const { filters } = useFilters();
  const { cart } = useCart();
  return (
    <footer className="footer">
      <h4>
        React Technical Test * - <span>@grdelgado96</span>
      </h4>
      <h5>Shopping Cart with useContext & useReducer</h5>
    </footer>
  );
}
