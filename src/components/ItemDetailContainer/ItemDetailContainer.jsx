import "./styles.css";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner.jsx";

const ItemDetailContainer = ({ data , onAdd}) => {
  
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3000);
  });

  return (
    <div className="container-item-detail">
      {loading ? <Spinner /> : <ItemDetail data={data} onAdd={onAdd} />}
    </div>
  );
};

export default ItemDetailContainer;
