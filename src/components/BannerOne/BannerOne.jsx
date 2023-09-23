import   './styles.css';


const BannerOne =()=>{
    return(
        <div className='banner-one'>
        
            <div className="option-shop">
                <div className="option">
                <i className="fa-solid fa-plane"></i>
                    <h2>FREE SHIPPING
                    </h2>
                    <h3>Free Shipping on all US order</h3>               
                     </div>
                     <div className="option">
                     <i className="fa-solid fa-comments"></i>
                    <h2>SUPPORT 24/7
                    </h2>
                    <h3>    Let us know how we can help</h3>               
                     </div>
                     <div className="option">
                     <i className="fa-solid fa-dollar-sign"></i>
                    <h2>100% MONEY BACK
                    </h2>
                    <h3>14 days return policy</h3>               
                     </div>
                     <div className="option">
                     <i className="fa-solid fa-money-check-dollar"></i>
                    <h2>PAYMENT SECURE
                    </h2>
                    <h3>Your data is protected</h3>               
                     </div>
            </div>
        </div>
    )
}

export default BannerOne;