import { createContext, useState } from "react";
import { useEffect } from "react";

//creo y exporto el contexto a utilizar
export const ItemsContext = createContext();

//Firebase
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

//creo el Provider ( siempre se coloca Provider)
export const ItemsProvider = ({ children }) => {
  const [bears, setBears] = useState([]);
  const [cart, setCart] = useState(0);
  const [cartBears, setCartBear] = useState([]);

  //console.log(bears);

  function addBearToCart(bear) {
    setCartBear([...cartBears, bear]);
  }

  function onAdd(productos) {
    setCart(cart + productos);
  }

  const getBears = async () => {
    const q = query(collection(db, "teddy-bears"));
    const docs = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });

    setBears(docs);
  };

  getBears();

  return (
    <ItemsContext.Provider
      value={{ bears, setBears, cart, cartBears, addBearToCart, onAdd }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
