import "./styles.css";
import { Link } from "react-router-dom";


const ItemDetail =({data})=>{

    return (
        <div className='container-item-detail'>
    
         <div className="item-detail">
          <div className="container-image">
          <img src={data.image} alt={data.image} />
          </div>

          <div className="container-description">
          <h2 className="category">Category: {`${data.category}`}</h2>
        <h3 className="price">$ {`${data.price}`}</h3>
        <Link style={{ textDecoration:'none' }} className="li" to={`/item/${data.id}` }>
          <li  className="link-cart">ADD TO CART</li>
        </Link>
        <h2 className="stock">Stock: {`${data.stock}`} </h2>
          </div>
     
        <h2 className="name">{`${data.name}`} </h2>
      
       
      </div>

        </div>
    )
}

export default ItemDetail;