import "./styles.css";
import CardUser from "../CardUser";
import { useState , useEffect } from "react";
import Spinner from "../Spinner/Spinner";

const ItemListContainer = ({ data }) => {
  const [loading, setloading] = useState(true);



  console.log(data);

  useEffect(() => {
   
    setTimeout(() => {
      setloading(false);
    }, "2000");
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
                  <CardUser data={bear} />
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
