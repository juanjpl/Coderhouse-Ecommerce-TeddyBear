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
  //console.log(result[0]);

/*
  useEffect(() => {
    const getBears = async () => {
      const q = query(collection(db, "playersCollection"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
      setBears(docs);
    };
    getBears();

  }, []);
  */

  return (
    <div className="container-detail">
      <ItemDetailContainer data={result[0]} />
    </div>
  );
};

export default DetailPage;
