import   './styles.css';
import facebook from "./assets/social-icons/facebook.png";
import logoteddy from './assets/logo-teddy.png';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="barra-social">
        <div className="icons-redes">
          <img src={facebook} alt="facebook-icon" />
          <img src={facebook} alt="instagram-icon" />
          <img src={facebook} alt="twitter-icon" />
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
        </div>
      </div>
    
    </div>
  );
};

export default Navbar;
