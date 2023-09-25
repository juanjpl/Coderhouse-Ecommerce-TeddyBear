import './styles.css';
import { useEffect , useState} from 'react';
import { useNavigate } from 'react-router';



const ErrorPage=()=>{
const[counter, setCounter] = useState(3);
    const navigate = useNavigate();

    useEffect(() => {

        setTimeout(() => {
            navigate('/');
        }, 4000);
 
        const interval = setInterval(() => {
            console.log('This will be called every 1 seconds');
            setCounter(counter-1);
          }, 1000);
        
          return () => clearInterval(interval);
      
    }, [navigate,counter])
    

    return(
        <div className="container-error">
     <h1>Error 404</h1>
        <h2>Usted serà redirigido a la Home en {counter} seg....</h2>
        </div>
   
    )
}

export default ErrorPage;