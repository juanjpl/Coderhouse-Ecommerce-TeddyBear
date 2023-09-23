import './styles.css';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';

const ItemDetailContainer =({data})=>{

    return (
        <div className='container-item-detail'>
            <ItemDetail data={data} />
        </div>
    )
}

export default ItemDetailContainer;