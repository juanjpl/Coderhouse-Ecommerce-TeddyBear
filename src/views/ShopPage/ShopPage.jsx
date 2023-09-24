import   './styles.css';
import SuperiorBar from '../../components/SuperiorBar/SuperiorBar';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer.jsx';


const ShopPage =({data})=>{
    return(
        <div className='container-shop'>
            <SuperiorBar title={'Shop'} />
            <ItemListContainer data={data} />
        </div>
    )
}

export default ShopPage;