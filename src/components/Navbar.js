import React from 'react';
import logo from "../logo.svg"
import cart from "../cart.svg"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="navbar-left">
                    <a href="/" style={{paddingRight: '0.5rem'}}><img src={logo} alt="Logo" className="navbar-logo" /></a>
                    <ul className="navbar-links">
                        <li className="navbar-item dropdown">
                            <a href="/categories">Categories</a>
                            {/* Implement dropdown here */}
                        </li>
                        <li className="navbar-item"><a href="/boat-personalization">Boat Personalization</a></li>
                        <li className="navbar-item"><a href="/gift-with-boat">Gift with Boat</a></li>
                        <li className="navbar-item"><a href="/corporate-orders">Corporate Orders</a></li>
                        <li className="navbar-item dropdown">
                            <a href="/more">More</a>
                            {/* Implement dropdown here */}
                        </li>
                    </ul>
                </div>
                <div className="navbar-right">
                    {/* Implement search bar here */}
                    <a href="/profile"><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Profile-1.png?v=1663762989" style={{width:"22px",height:"22px"}}/></a>
                    <a href="/cart"><img src={cart} style={{width:"1.3rem", marginLeft:"0.5rem"}} alt="Logo" className="navbar-logo" /></a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;