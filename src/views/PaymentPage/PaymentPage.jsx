import   './styles.css';
import { useState, useEffect } from "react";
import Spinner from '../../components/Spinner/Spinner';
import Payment from '../../components/Payment/Payment';



const PaymentPage =()=>{

    const [loading, setloading] = useState(true);

 

    useEffect(() => {
        
        setTimeout(() => {
          setloading(false);
        }, 3000);
      },[]);


    return(
        <div className='container-payment-page'>

              {loading ? <Spinner /> : <Payment  /> }
           
        </div>
    )
}

export default PaymentPage;