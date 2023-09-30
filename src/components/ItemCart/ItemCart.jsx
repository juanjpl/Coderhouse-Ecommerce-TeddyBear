import "./styles.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";


const ItemCart = ({ data  }) => {

  const {removeBearToCart } = useContext(ItemsContext);

  //console.log(data[0]);
  return (
    <div className="container-itemCart">
      <div className="image-itemCart">
        <img src={data[0].imagen} alt="image cart" />
      </div>
      <div className="description-itemCart">
        <h2 className="name">{data[0].name} </h2>
        <h2 className="category">{data[0].category} </h2>
        <h2 className="description">{data[0].description} </h2>
      </div>
      <div className="payment-itemCart">
   
     <div>
     <button onClick={()=>removeBearToCart(data[0])} className="button-x">Eliminar</button>

     </div>
       
     
        <h3 className="id">Product ID: {data[0].id} </h3>
        <h3 className="price">Price: ${data[0].price} </h3>
        <h3 className="quantity">Quantity: {data[0].quantity} </h3>
      </div>
    </div>
  );
};

export default ItemCart;
