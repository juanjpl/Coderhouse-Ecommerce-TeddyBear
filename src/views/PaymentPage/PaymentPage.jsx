import   './styles.css';
import { useState, useEffect } from "react";
import Spinner from '../../components/Spinner/Spinner';
import Payment from '../../components/Payment/Payment';
import NotFound from '../../components/NotFound/NotFound';



const PaymentPage =({cartBears})=>{

    const [loading, setloading] = useState(true);

 

    useEffect(() => {
        
        setTimeout(() => {
          setloading(false);
        }, 3000);
      },[]);


    return(
        <div className='container-payment-page'>

              {loading ? <Spinner /> : <Payment cartBears={cartBears} /> }
           
        </div>
    )
}

export default PaymentPage;