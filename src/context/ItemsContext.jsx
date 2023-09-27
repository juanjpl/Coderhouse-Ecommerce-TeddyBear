import { createContext, useState } from "react";
import { useEffect } from "react";

//creo y exporto el contexto a utilizar
export const ItemsContext = createContext();

//Firebase
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const itemsInStock = [
  {
    category: "Boy",
    color: "Multi Bright",
    description:
      "Hoppy Swirls Frog looks toad-ally cool with its tie-dye fur! This groovy looking frog is ready to make the leap into your collection. Its soft fur is a cool swirl of purple, blue and green colors. Make your Hoppy Swirls Frog even more unique by personalizing with the outfits, sounds and scents of your choice!",
    eyes: "Black",
    id: "VM8Rz1VeaCC1DlJQWIJQ",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fb-58058-teddy-bears.appspot.com/o/Hoppy-Swirls-Frog.jpg?alt=media&token=02d0ff45-ecb7-419c-a45e-626ed4ef5952",
    name: "Hoppy Swirls Frog",
    price: 25.5,
    stock: 850,
  },
  {
    category: "Boy",
    color: "Multi Bright",
    description:
      "Hoppy Swirls Frog looks toad-ally cool with its tie-dye fur! This groovy looking frog is ready to make the leap into your collection. Its soft fur is a cool swirl of purple, blue and green colors. Make your Hoppy Swirls Frog even more unique by personalizing with the outfits, sounds and scents of your choice!",
    eyes: "Black",
    id: "VM8Rz1VeaCC1DlJQWIJQ",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fb-58058-teddy-bears.appspot.com/o/Hoppy-Swirls-Frog.jpg?alt=media&token=02d0ff45-ecb7-419c-a45e-626ed4ef5952",
    name: "Hoppy Swirls Frog",
    price: 25.5,
    stock: 850,
  },
  {
    category: "Boy",
    color: "Multi Bright",
    description:
      "Hoppy Swirls Frog looks toad-ally cool with its tie-dye fur! This groovy looking frog is ready to make the leap into your collection. Its soft fur is a cool swirl of purple, blue and green colors. Make your Hoppy Swirls Frog even more unique by personalizing with the outfits, sounds and scents of your choice!",
    eyes: "Black",
    id: "VM8Rz1VeaCC1DlJQWIJQ",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fb-58058-teddy-bears.appspot.com/o/Hoppy-Swirls-Frog.jpg?alt=media&token=02d0ff45-ecb7-419c-a45e-626ed4ef5952",
    name: "Hoppy Swirls Frog",
    price: 25.5,
    stock: 850,
  },
  {
    category: "Boy",
    color: "Multi Bright",
    description:
      "Hoppy Swirls Frog looks toad-ally cool with its tie-dye fur! This groovy looking frog is ready to make the leap into your collection. Its soft fur is a cool swirl of purple, blue and green colors. Make your Hoppy Swirls Frog even more unique by personalizing with the outfits, sounds and scents of your choice!",
    eyes: "Black",
    id: "VM8Rz1VeaCC1DlJQWIJQ",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fb-58058-teddy-bears.appspot.com/o/Hoppy-Swirls-Frog.jpg?alt=media&token=02d0ff45-ecb7-419c-a45e-626ed4ef5952",
    name: "Hoppy Swirls Frog",
    price: 25.5,
    stock: 850,
  },
  {
    category: "Boy",
    color: "Multi Bright",
    description:
      "Hoppy Swirls Frog looks toad-ally cool with its tie-dye fur! This groovy looking frog is ready to make the leap into your collection. Its soft fur is a cool swirl of purple, blue and green colors. Make your Hoppy Swirls Frog even more unique by personalizing with the outfits, sounds and scents of your choice!",
    eyes: "Black",
    id: "VM8Rz1VeaCC1DlJQWIJQ",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fb-58058-teddy-bears.appspot.com/o/Hoppy-Swirls-Frog.jpg?alt=media&token=02d0ff45-ecb7-419c-a45e-626ed4ef5952",
    name: "Hoppy Swirls Frog",
    price: 25.5,
    stock: 850,
  },
  {
    category: "Boy",
    color: "Multi Bright",
    description:
      "Hoppy Swirls Frog looks toad-ally cool with its tie-dye fur! This groovy looking frog is ready to make the leap into your collection. Its soft fur is a cool swirl of purple, blue and green colors. Make your Hoppy Swirls Frog even more unique by personalizing with the outfits, sounds and scents of your choice!",
    eyes: "Black",
    id: "VM8Rz1VeaCC1DlJQWIJQ",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fb-58058-teddy-bears.appspot.com/o/Hoppy-Swirls-Frog.jpg?alt=media&token=02d0ff45-ecb7-419c-a45e-626ed4ef5952",
    name: "Hoppy Swirls Frog",
    price: 25.5,
    stock: 850,
  },
];

//creo el Provider ( siempre se coloca Provider)
export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState(itemsInStock);
  const [bears, setBears] = useState([]);
  const [cart, setCart] = useState(0);
  const [cartBears, setCartBear] = useState([]);

  console.log(bears);

  function addBearToCart(bear) {
    //console.log(bear);
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
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());

      docs.push({ ...doc.data(), id: doc.id });
    });

    setBears(docs);

  };

  getBears();



  const foo = () => {
    alert(`La cantidad total de productos: ${items.length}`);
  };

  return (
    <ItemsContext.Provider value={{  bears, setBears, cart ,addBearToCart, onAdd}}>
      {children}
    </ItemsContext.Provider>
  );
};
