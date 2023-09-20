import "./styles.css";
import CardUser from "../CardUser";

const ItemListContainer = ({ data }) => {
  console.log(data);
  return (
    <div className="container-item-list">
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
    </div>
  );
};

export default ItemListContainer;
