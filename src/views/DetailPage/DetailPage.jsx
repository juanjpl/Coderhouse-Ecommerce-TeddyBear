import "./styles.css";
import { useEffect , useState } from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";


//Firebase
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const DetailPage = () => {
  
  const {bears, setBears } = useContext(ItemsContext);


  //const { bears } = useContext(ItemsContext);
  let { id } = useParams();

  //console.log(bears);
  const result = bears.filter((bear) => bear.id === id);


  return (
    <div className="container-detail">
      <ItemDetailContainer data={result[0]} />
    </div>
  );
};

export default DetailPage;
