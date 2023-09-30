import "./styles.css";
import { Link } from "react-router-dom";
import logoteddy from "./assets/logo-teddy.png";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="barra-social">
        <div className="icons-redes">
          <i className="fa-brands fa-square-x-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-pinterest-p"></i>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-linkedin"></i>
        </div>
        <div className="icons-texto">
          <h2>FREE WORLDWIDE SHIPPING & DISCOUNT UP TO 40% OFF</h2>
        </div>
      </div>
      <div className="navbar">
        <div className="logo-teddy">
        
        <Link className="li-image-link" to="/" onClick={() => window.scrollTo(0, 0)}>
        <img className="image-logo-link" src={logoteddy} alt="logo-teddy" />
              </Link>
        
        </div>
        <div className="links-nav">
          <nav>
            <ul>
              <Link className="li" to="/" onClick={() => window.scrollTo(0, 0)}>
                HOMEPAGE
              </Link>
              <Link className="li" to="/about" onClick={() => window.scrollTo(0, 0)}>
                ABOUT
              </Link>
              <Link className="li" to="/shop" onClick={() => window.scrollTo(0, 0)}>
                SHOP
              </Link>
              <Link className="li" to="/contact" onClick={() => window.scrollTo(0, 0)}>
                CONTACT
              </Link>
            </ul>
          </nav>
          <CartWidget />
        </div>
      </div>
      <div className="barra-categories">
        <div className="links-categories">
          <Link className="li" to="/category/Boy" onClick={() => window.scrollTo(0, 0)}>
            BOYS
          </Link>
          <Link className="li" to="/category/All" onClick={() => window.scrollTo(0, 0)}>
            ALL
          </Link>
          <Link className="li" to="/category/Girl" onClick={() => window.scrollTo(0, 0)}>
            GIRLS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
