import './styles.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const SuccessPurchase = ({ order }) => {
  const [counter, setCounter] = useState(3);
  const navigate = useNavigate();

  
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 4000);

    const interval = setInterval(() => {
      setCounter(counter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate, counter]);
  

  return (
    <div className='purchase-container'>
      <h2>Gracias por su compra!</h2>
      <h2>Su orden tiene ID:</h2>
      <h3>{order} </h3>
    </div>
  );
};

export default SuccessPurchase;
