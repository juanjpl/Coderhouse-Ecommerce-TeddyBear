import "./styles.css";
import Items from "../Items/Items.jsx";

import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner.jsx";

const ItemListContainer = ({ data }) => {
 
  return (
    <div className="container-item-list">
     
        
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
      
    </div>
  );
};

export default ItemListContainer;
