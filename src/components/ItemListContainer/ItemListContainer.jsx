import "./styles.css";
import Items from "../Items/Items.jsx";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner.jsx";

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
                  <Link className="style-links" to={`/item/${bear.id} `}>
                    <Items data={bear} />
                  </Link>
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
