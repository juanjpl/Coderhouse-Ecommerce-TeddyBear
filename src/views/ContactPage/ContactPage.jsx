import "./styles.css";
import SuperiorBar from "../../components/SuperiorBar/SuperiorBar";
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";

const ContactPage = () => {
  
  return (
    <div className="container-contact">
      <SuperiorBar title={"Contact"} />
      <h1>hola desde el contact</h1>
    
    </div>
  );
};

export default ContactPage;
