import   './styles.css';
import facebook from "./assets/social-icons/facebook.png";
import logoteddy from './assets/logo-teddy.png';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="barra-social">
        <div className="icons-redes">
   <i class="fa-brands fa-square-x-twitter"></i>
       
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-pinterest-p"></i>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-linkedin"></i>
        </div>
        <div className="icons-texto">
          <h2>FREE WORLDWIDE SHIPPING & DISCOUNT UP TO 40% OFF</h2>
        </div>
      </div>
      <div className="navbar">
        <div className="logo-teddy">
            <img src={logoteddy} alt="logo-teddy" />
        </div>
        <div className='links-nav'>
            <nav>
                <ul>
                    <li>
                        <a href="/homepage">HOMEPAGE</a>
                    </li>
                    <li>
                        <a href="/homepage">ABOUT</a>
                    </li>
                    <li>
                        <a href="/homepage">SHOP</a>
                    </li>
                    <li>
                        <a href="/homepage">CONTACT</a>
                    </li>

                </ul>
            </nav>
            <CartWidget/>
        </div>
      </div>
    
    </div>
  );
};

export default Navbar;
