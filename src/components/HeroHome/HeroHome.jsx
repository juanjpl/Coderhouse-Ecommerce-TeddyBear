import   './styles.css';
import { Link } from "react-router-dom";

const HeroHome =()=>{
    return(
        <div className='hero-home'>
           <div className="texto-hero">
            <h1>GET YOUR TEDDY BEAR NOW!</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam fugiat cumque. Rerum illum esse, mollitia dolore natus nesciunt quaerat perspiciatis unde ratione tenetur dolores delectus asperiores, aperiam, repudiandae ipsum.</h2>
        
            <Link className="li-button-shop" to="/shop">
           SHOP NOW
          </Link>
     

           </div>
        </div>
    )
}

export default HeroHome;