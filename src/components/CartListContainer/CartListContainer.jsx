import './styles.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import ItemCart from '../ItemCart/ItemCart.jsx';
import SuperiorBar from "../../components/SuperiorBar/SuperiorBar";

const CartListContainer =({data})=>{

    const [amount, setamount] = useState(0);
    console.log(data)

    return(

        <div className="container-cartList">
                <SuperiorBar title={'Checkout'} />
            <div className="container-cards">
            {data.map((item,index) => {
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
                <h2>{amount}</h2>  <button>PAY</button></div>
           
          </div>
        </div>
    )
}

export default CartListContainer;