import '.styles.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const ErrorPage=()=>{

    const navigate = useNavigate();

    useEffect(() => {

        setTimeout(() => {
            navigate('/');
        }, 3000);
 
    
      
    }, [navigate])
    

    return(
        <div className="container-error">
     <h1>Error 404</h1>
        <h2>Usted serà redirigido a la Home en 3 seg....</h2>
        </div>
   
    )
}

export default ErrorPage;