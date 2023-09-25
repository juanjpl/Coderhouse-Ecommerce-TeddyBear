import "./styles.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ItemDetail = ({ data, onAdd,addBearToCart }) => {
  
  const [count, setCount] = useState(1);
  const [bear, setBear] =useState({
    name:'',
    price:0,
    description:'',
    imagen: '',
    id:'',
    quantity: 0

  })

 

  useEffect(() => {
    //console.log(`Productos a agregar ${count} `);
  }, [count]);

  return (
    <div className="container-item-detail">
      <div className="item-detail">
        <div className="container-image">
          <img src={data.image} alt={data.image} />
        </div>

        <div className="container-description">
        

          <h2 className="name">{`${data.name}`} </h2>
          <h2 className="category">Category: {`${data.category}`}</h2>
          <h2 className="description">{`${data.description}`} </h2>
          <h3 className="price">$ {`${data.price}`}</h3>
          <div className="botonera">
           
            <button
              disabled={count >= data.stock}
              onClick={() => setCount((count) => count + 1)}
            >
             +
            </button>
            <p>{count} </p>
            <button
              disabled={count <= 1}
              onClick={() => setCount((count) => count - 1)}
            >
              -
            </button>
          </div>

          <div>
            <Link
              style={{ textDecoration: "none" }}
              className="li"
              to={`/checkout`}
            >
              <li
                className="link-description-cart"
                disabled={data.stock <= 0}
                onClick={() => {
                  onAdd(count);
                  setCount(1);
                  addBearToCart([  
                   { name:data.name,
                    price:data.price,
                    description:data.description,
                    imagen: data.image,
                    id:data.id,
                    quantity: count}])
                }}
              >
                ADD TO CART
              </li>
            </Link>
            <h2 className="stock">Stock: {`${data.stock}`} </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
