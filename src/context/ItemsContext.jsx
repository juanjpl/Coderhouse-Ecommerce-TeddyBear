import { createContext, useState } from "react";

//creo y exporto el contexto a utilizar
export const ItemsContext = createContext();

let initialsBears = [
  {
    id: "1",
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
    id: "1",
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

//inti

//creo el Provider ( siempre se coloca Provider)
export const ItemsProvider = ({ children }) => {
  const [bears, setBears] = useState(initialsBears);
  const [cart, setCart] = useState(0);
  const [cartBears, setCartBear] = useState([]);

  function addBearToCart(bear) {
    //revisar si existe en el carrito un elemento igual
    const existe = cartBears.some((item) => item[0].id === bear[0].id);
    //console.log(existe);
    //console.log(bear[0].id)

    if (existe) {
      const items = cartBears.map((teddy) => {
        if (teddy[0].id === bear[0].id) {
          // console.log(  teddy[0].quantity + bear[0].quantity);
          teddy[0].quantity += bear[0].quantity;
          return teddy;
        } else {
          return teddy;
        }
      });

      setCartBear([...items]);
      //console.log(cartBears)
    } else {
      setCartBear([...cartBears, bear]);
    }

    //console.log(cartBears)
  }

  function onAdd(productos) {
    setCart(cart + productos);
  }

  function removeBearToCart(bear) {
    const removeBear = cartBears.filter((teddy) => teddy[0].id !== bear.id);

    setCartBear(removeBear);
    setCart(cart - bear.quantity);
  }

  return (
    <ItemsContext.Provider
      value={{
        bears,
        setBears,
        cart,
        setCart,
        cartBears,
        setCartBear,
        addBearToCart,
        removeBearToCart,
        onAdd,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
