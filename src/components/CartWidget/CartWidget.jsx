import "./styles.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";

const CartWidget = () => {
  const { cart } = useContext(ItemsContext);

  return (
    <div className="container-widget">
      <Link className="li" to="/checkout" onClick={() => window.scrollTo(0, 0)}>
        <i className="fa-solid fa-bag-shopping"></i>
        <h2>{cart}</h2>
      </Link>
    </div>
  );
};

export default CartWidget;
