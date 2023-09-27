import "./styles.css";
import { useState, useEffect } from "react";

import Spinner from "../../components/Spinner/Spinner";
import CartListContainer from "../../components/CartListContainer/CartListContainer.jsx";

const CartPage = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);

  return (
    <div className="container-cart">
      {loading ? <Spinner /> : <CartListContainer />}
    </div>
  );
};

export default CartPage;
