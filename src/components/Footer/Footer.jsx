import "./styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-footer">
        <div className="option">
            <h2>CONTACT</h2>
            <div className="direction">
            <i class="fa-solid fa-location-dot"></i>
            <h3>Cabildo 2000, CABA, Argentina</h3>
            </div>
            <div className="direction">
            <i class="fa-solid fa-phone"></i>
            <h3>+111 22 33 444</h3>
            </div>
            <div className="direction">
            <i class="fa-solid fa-envelope"></i>
            <h3>contact@teddy-bear.com</h3>
            </div>
         
      
         
        </div>
        <div className="option">
        <h2>INFORMATION</h2>
      <a href="/about">About Us</a>
      <a href="/shop">Shop</a>
      <a href="/contact">Contact</a>
      <a href="/location">Location</a>
        </div>
        <div className="option">
        <h2>OUR SERVICE</h2>
      <a href="/about">About Us</a>
      <a href="/shop">Shop</a>
      <a href="/contact">Contact</a>
      <a href="/location">Location</a>
        </div>
      </div>
      <div className="copyright">
        <h2>COPYRIGHT - TEDDY BEARS FOR HUGS - JUAN PASCUAL LIMA</h2>
      </div>
    </div>
  );
};

export default Footer;
