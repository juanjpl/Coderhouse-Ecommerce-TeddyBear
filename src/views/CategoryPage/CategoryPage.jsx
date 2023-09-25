import   './styles.css';
import { useParams } from 'react-router';
import { useState, useEffect } from "react";
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer.jsx';
import Spinner from '../../components/Spinner/Spinner';


const CategoryPage =({data})=>{

    const [loading, setloading] = useState(true);

   

    const bears = data;
    //console.log(data);
    let {category} = useParams();
    //console.log(category);

    const result = bears.filter((bear) => bear.category == category );
    //console.log(result);
    
    useEffect(() => {
        
        setTimeout(() => {
          setloading(false);
        }, 3000);
      },[category]);
    return(
        <div className='container-category'>
             {loading ? <Spinner /> :  <ItemListContainer data={result} />}
           
        </div>
    )
}

export default CategoryPage;