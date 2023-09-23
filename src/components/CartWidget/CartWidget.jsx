import "./styles.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const CartWidget = ({data}) => {

  const [cartItem,setCartItem]=useState(data);


  console.log(`llego esta data${data}`);
  
  useEffect(() => {
   
    setCartItem(data)
  }, [cartItem]);


  return (
    <div className="container-widget">
      <Link className="li" to='/cart'>
      <i className="fa-solid fa-bag-shopping"></i>
      <h2>{cartItem}</h2>
      </Link>
    
    </div>
  );
};

export default CartWidget;
