import "./styles.css";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div className="container-widget">
      <Link className="li" to='/cart'>
      <i class="fa-solid fa-bag-shopping"></i>
      <h2>0</h2>
      </Link>
    
    </div>
  );
};

export default CartWidget;
