import React, { useState } from 'react';
import logo from "../logo.svg";
import cart from "../cart.svg";

const Navbar = () => {
  const [categoriesDropdownVisible, setCategoriesDropdownVisible] = useState(false);
  const [moreDropdownVisible, setMoreDropdownVisible] = useState(false);

  const toggleCategoriesDropdown = () => {
    setCategoriesDropdownVisible(!categoriesDropdownVisible);
    setMoreDropdownVisible(false);
  };

  const toggleMoreDropdown = () => {
    setMoreDropdownVisible(!moreDropdownVisible);
    setCategoriesDropdownVisible(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <a href="/" style={{ paddingRight: '0.5rem' }}><img src={logo} alt="Logo" className="navbar-logo" /></a>
          <ul className="navbar-links">
            <li className="navbar-item dropdown">
              <a href="/categories" onClick={toggleCategoriesDropdown}>
                Categories
                {categoriesDropdownVisible && (
                  <div className="dropdown-content">
                    <a href="/category1">Category 1</a>
                    <a href="/category2">Category 2</a>
                    {/* Add more categories as needed */}
                  </div>
                )}
              </a>
            </li>
            <li className="navbar-item"><a href="/boat-personalization">Boat Personalization</a></li>
            <li className="navbar-item"><a href="/gift-with-boat">Gift with Boat</a></li>
            <li className="navbar-item"><a href="/corporate-orders">Corporate Orders</a></li>
            <li className="navbar-item dropdown">
              <a href="/more" onClick={toggleMoreDropdown}>
                More
                {moreDropdownVisible && (
                  <div className="dropdown-content">
                    <a href="/option1">Option 1</a>
                    <a href="/option2">Option 2</a>
                    {/* Add more options as needed */}
                  </div>
                )}
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          {/* Implement search bar here */}
          <a href="/profile"><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Profile-1.png?v=1663762989" style={{ width: "22px", height: "22px" }} /></a>
          <a href="/cart"><img src={cart} style={{ width: "1.3rem", marginLeft: "0.5rem" }} alt="Logo" className="navbar-logo" /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
