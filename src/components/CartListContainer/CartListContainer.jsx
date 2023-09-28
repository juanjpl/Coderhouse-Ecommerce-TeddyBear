import "./styles.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";
import ItemCart from "../ItemCart/ItemCart.jsx";
import SuperiorBar from "../../components/SuperiorBar/SuperiorBar";

const CartListContainer = () => {
  
  const { cartBears } = useContext(ItemsContext);
  
  const [amount, setamount] = useState(0);

  return (
    <div className="container-cartList">
      <SuperiorBar title={"Checkout"} />
      <div className="container-cards">
        {cartBears.map((item, index) => {
          return (
            <div key={index}>
              <Link className="style-links" to={`/item/${item[0].id} `}>
                <ItemCart data={item} />
              </Link>
            </div>
          );
        })}
      </div>

      <div className="totalCart">
        <div className="total">
          <h2 className="total-amount">Total Amount:</h2>
        </div>
        <div className="account">
          <h2>{amount}</h2>
          <Link className="style-links" to={`/payment `}>
            <h2 className="button-pay-link">PAY</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartListContainer;
