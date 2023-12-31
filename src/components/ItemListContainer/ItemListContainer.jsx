import "./styles.css";
import Items from "../Items/Items.jsx";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner.jsx";
import NotFound from "../NotFound/NotFound.jsx";

const ItemListContainer = ({ data, searchItem }) => {

  
  const [value, setValue] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setValue(searchItem);

    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, [value]);

  return (
    <div className="container-item-list">
      {loading ? (
        <Spinner />
      ) : data.length === 0 ? (
        <NotFound />
      ) : (
        <div className="grid">
          {data.map((bear,index) => {
            return (
              <div key={index}>
                <Link className="style-links" to={`/item/${bear.id} `} onClick={() => window.scrollTo(0, 0)}>
                  <Items data={bear} />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
