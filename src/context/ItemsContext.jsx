import { createContext, useState } from "react";

//creo y exporto el contexto a utilizar
export const ItemsContext = createContext();

//Firebase
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const initialsBears = [
  {
    id:"1",
    category: "Boy",
    color: "Multi Bright",
    description:
      "Hoppy Swirls Frog looks toad-ally cool with its tie-dye fur! This groovy looking frog is ready to make the leap into your collection. Its soft fur is a cool swirl of purple, blue and green colors. Make your Hoppy Swirls Frog even more unique by personalizing with the outfits, sounds and scents of your choice!",
    eyes: "Black",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fb-58058-teddy-bears.appspot.com/o/Hoppy-Swirls-Frog.jpg?alt=media&token=02d0ff45-ecb7-419c-a45e-626ed4ef5952",
    name: "Hoppy Swirls Frog",
    price: 25.5,
    stock: 850,
  },
  {
    id:"1",
    category: "Boy",
    color: "Multi Bright",
    description:
      "Hoppy Swirls Frog looks toad-ally cool with its tie-dye fur! This groovy looking frog is ready to make the leap into your collection. Its soft fur is a cool swirl of purple, blue and green colors. Make your Hoppy Swirls Frog even more unique by personalizing with the outfits, sounds and scents of your choice!",
    eyes: "Black",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fb-58058-teddy-bears.appspot.com/o/Hoppy-Swirls-Frog.jpg?alt=media&token=02d0ff45-ecb7-419c-a45e-626ed4ef5952",
    name: "Hoppy Swirls Frog",
    price: 25.5,
    stock: 850,
  },
];

const getBears = async () => {
  const q = query(collection(db, "teddy-bears"));
  const docs = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id });
  });
};

//inti

//creo el Provider ( siempre se coloca Provider)
export const ItemsProvider = ({ children }) => {
  const [bears, setBears] = useState(initialsBears);
  const [cart, setCart] = useState(0);
  const [cartBears, setCartBear] = useState([]);

  //console.log(bears);

  function addBearToCart(bear) {
    setCartBear([...cartBears, bear]);
  }

  function onAdd(productos) {
    setCart(cart + productos);
  }

 //setBears(initialsBears)

  return (
    <ItemsContext.Provider
      value={{ bears, setBears, cart, cartBears, addBearToCart, onAdd }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
