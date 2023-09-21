import   './styles.css';
import { Link } from 'react-router-dom';

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
                  <Link className='li' to='/'>
                    HOMEPAGE
                  </Link>
                  <Link className='li' to='/about'>
                    ABOUT
                  </Link>
                  <Link className='li' to='/shop'>
                    SHOP
                  </Link>
                  <Link className='li' to='/contact'>
                    CONTACT
                  </Link>
                 

                </ul>
            </nav>
            <CartWidget/>
        </div>
      </div>
      <div className="barra-categories">
     

<div className="links-categories">
  <a href="/categories/:boys">BOYS</a>
  <a href="/categories/:all">ALL</a>
  <a href="/categories/:girls">GIRLS</a>
</div>
       
      </div>
    
    </div>
  );
};

export default Navbar;
