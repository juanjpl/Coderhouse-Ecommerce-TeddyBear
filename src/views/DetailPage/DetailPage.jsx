import   './styles.css';
import { useParams } from 'react-router';

const DetailPage =({data})=>{

    const bears = data;
    //console.log(data);
    let {id} = useParams();
    //console.log(id);

    const result = bears.filter((bear) => bear.id === id );
    console.log(result[0]);


    return(
        <div className='container-detail'>
            <h1>Item - Detail Page</h1>
        </div>
    )
}

export default DetailPage;