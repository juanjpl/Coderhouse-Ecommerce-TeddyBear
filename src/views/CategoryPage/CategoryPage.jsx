import "./styles.css";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer.jsx";
import Spinner from "../../components/Spinner/Spinner";

const CategoryPage = () => {
  const { bears } = useContext(ItemsContext);
  const [loading, setloading] = useState(true);

  let { category } = useParams();

  const result = bears.filter((bear) => bear.category == category);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, [category]);

  return (
    <div className="container-category">
      {loading ? <Spinner /> : <ItemListContainer data={result} />}
    </div>
  );
};

export default CategoryPage;
