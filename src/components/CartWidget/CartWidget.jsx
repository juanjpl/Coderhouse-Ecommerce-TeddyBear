import "./styles.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const CartWidget = ({data}) => {




  return (
    <div className="container-widget">
      <Link className="li" to='/checkout'>
      <i className="fa-solid fa-bag-shopping"></i>
      <h2>{data}</h2>
      </Link>
    
    </div>
  );
};

export default CartWidget;
