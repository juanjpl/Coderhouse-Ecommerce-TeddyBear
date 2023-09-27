import "./styles.css";
import { Link } from "react-router-dom";

const Items = ({ data }) => {
  return (
    <div className="container-item">
      <div className="item">
        <img src={data.image} alt={data.image} />
        <h2 className="name">{`${data.name}`} </h2>

        <h2 className="category">Category: {`${data.category}`}</h2>
        <h3 className="price">$ {`${data.price}`}</h3>

        <li className="link-cart li">VIEW MORE</li>

        <h2 className="stock">Stock: {`${data.stock}`} </h2>
      </div>
    </div>
  );
};

export default Items;
