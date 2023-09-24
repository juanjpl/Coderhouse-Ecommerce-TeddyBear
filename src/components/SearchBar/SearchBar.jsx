import './styles.css';

const SearchBar=({title})=>{

    return(
        <div className="search-bar">
        <div className="contenedor-bar">
            <h2>{title}</h2>
        <div className="search-input">
            <input id='input-search' className='input-search' type="text" placeholder='search' />
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
     
        </div>
            
    </div>
    )
}

export default SearchBar;