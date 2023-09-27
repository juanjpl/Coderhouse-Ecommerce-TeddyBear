import "./styles.css";
import SuperiorBar from "../../components/SuperiorBar/SuperiorBar";
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";

const ContactPage = () => {
  const { items, setItems, foo } = useContext(ItemsContext);
  console.log(items);

  const newItemsInStock = [
    {
      category: "Girl",
      color: "New Product",
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

  return (
    <div className="container-contact">
      <SuperiorBar title={"Contact"} />
      <div>
        <button onClick={() => setItems(newItemsInStock)}>Change Stock</button>
        <button onClick={() => setItems([])}>Vaciar Carrito</button>
        <button onClick={() => foo()}>Cantidad Stock</button>
      </div>

      <div>
        {items.map((item, index) => {
          return (
            <div key={index}>
              <h2>name:{item.name}</h2>
              <h3>category:{item.category} </h3>
              <h3>price:{item.price} </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactPage;
