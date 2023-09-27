import { createContext, useState } from "react";

//creo y exporto el contexto a utilizar
export const ItemsContext = createContext();

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
const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState(itemsInStock);

  return <ItemsContext.Provider>{children}</ItemsContext.Provider>;
};
