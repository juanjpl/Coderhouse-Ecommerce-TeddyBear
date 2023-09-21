import "./styles.css";
import Item from '../Item/Item.jsx';
import { useState , useEffect } from "react";
import Spinner from "../Spinner/Spinner";

const ItemListContainer = ({ data }) => {
  const [loading, setloading] = useState(true);





  useEffect(() => {
   
    setTimeout(() => {
      setloading(false);
    }, 3000);
  });
  return (
    <div className="container-item-list">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h2>OURS PRODUCTS</h2>
          <div className="grid">
            {data.map((bear) => {
              return (
                <div key={bear.id}>
                  <Item data={bear} />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
