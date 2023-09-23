import   './styles.css';
import { useParams } from 'react-router';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer.jsx';


const CategoryPage =({data})=>{

    const bears = data;
    console.log(data);
    let {category} = useParams();
    console.log(category);

    const result = bears.filter((bear) => bear.category == category );
    console.log(result);
    
    return(
        <div className='container-category'>
            <ItemListContainer data={result} />
        </div>
    )
}

export default CategoryPage;