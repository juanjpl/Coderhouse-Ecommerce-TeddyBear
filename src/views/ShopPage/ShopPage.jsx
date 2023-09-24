import   './styles.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer.jsx';


const ShopPage =({data})=>{
    return(
        <div className='container-shop'>
            <SearchBar title='Shop' />
            <ItemListContainer data={data} />
        </div>
    )
}

export default ShopPage;