import "./styles.css";
import { useParams } from "react-router";
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";

const DetailPage = () => {
  const { bears } = useContext(ItemsContext);

  //console.log(data);
  let { id } = useParams();
  //console.log(id);

  const result = bears.filter((bear) => bear.id === id);
  //console.log(result[0]);

  return (
    <div className="container-detail">
      <ItemDetailContainer data={result[0]} />
    </div>
  );
};

export default DetailPage;
