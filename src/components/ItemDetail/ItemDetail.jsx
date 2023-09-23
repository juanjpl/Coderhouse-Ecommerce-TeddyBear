import "./styles.css";
import { Link } from "react-router-dom";
import { useState , useEffect } from 'react';

const ItemDetail = ({ data , onAdd }) => {

  const [count, setCount] = useState(1);

  useEffect(()=>{
    console.log(`Productos a agregar ${count} `)
    },[count])

  return (
    <div className="container-item-detail">
      <div className="item-detail">
        <div className="container-image">
          <img src={data.image} alt={data.image} />
        </div>

        <div className="container-description">
        <div className="card">
          
          <p>{count} </p>
          <button disabled={count >= data.stock} onClick={() => setCount((count) => count + 1)}>
           Increment
          </button>
          <button disabled={count <= 1} onClick={() => setCount((count) => count - 1)}>
           Decrement
          </button>
         
        </div>
         
         
          <h2 className="name">{`${data.name}`} </h2>
          <h2 className="category">Category: {`${data.category}`}</h2>
          <h2 className="description">{`${data.description}`} </h2>
          <h3 className="price">$ {`${data.price}`}</h3>

          <div>
          <Link
            style={{ textDecoration: "none" }}
            className="li"
            to={`/home`}
          >
            <li className="link-cart" disabled={data.stock<=0} onClick={() =>{ onAdd(count);setCount(1)}}>ADD TO CART</li>
          </Link>
          <h2 className="stock">Stock: {`${data.stock}`} </h2>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
