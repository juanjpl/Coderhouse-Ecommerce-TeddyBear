import "./styles.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";

const ItemDetail = ({ data }) => {
  const { onAdd, addBearToCart } = useContext(ItemsContext);

  const [count, setCount] = useState(1);

  useEffect(() => {}, [count]);

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
              className="button-detail"
              disabled={count >= data.stock}
              onClick={() => setCount((count) => count + 1)}
            >
              +
            </button>
            <p>{count} </p>
            <button
              className="button-detail"
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
              onClick={() => window.scrollTo(0, 0)}
            >
              <li
                className="link-description-cart"
                disabled={data.stock <= 0}
                onClick={() => {
                  onAdd(count);
                  setCount(1);
                  addBearToCart([
                    {
                      name: data.name,
                      price: data.price,
                      description: data.description,
                      imagen: data.image,
                      id: data.id,
                      quantity: count,
                    },
                  ]);
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

56;
512;
3;

100;
46;
302;
93;
