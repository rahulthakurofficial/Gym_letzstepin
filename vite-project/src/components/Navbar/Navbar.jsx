import React, { useState } from "react";
import "./Navbar.scss";
import { FaSearch, FaChevronDown, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../CartContext";
import letzstepin_logo from "../../assets/letzstepin_logo.png";

const Navbar = () => {
  const { cartItems } = useCart();
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const toggleCartDropdown = () => {
    setShowCartDropdown((prev) => !prev);
  };

  return (
    <nav className="navbar">
     <div className="logo">
      <img src={letzstepin_logo} alt="Logo" />
    </div>


      <div className="input-group">
        {/* Search Input */}
        <div className="input-wrapper">
          <FaSearch className="icon" />
          <input type="text" placeholder="Search..." />
        </div>

        {/* Dropdown Input */}
        <div className="dropdown-wrapper">
          <div className="dropdown-header" onClick={toggleDropdown}>
            <input type="text" placeholder="Select Location" readOnly />
            <FaChevronDown className="icon" />
          </div>

          {showDropdown && (
            <div className="dropdown-menu">
              <input type="text" placeholder="My Current Location" />
              <input type="text" placeholder="GPS Tracker" />
            </div>
          )}
        </div>
      

      {/* Cart Section */}
      <div className="cart-section">
        <div className="cart-icon" onClick={toggleCartDropdown}>
          <FaShoppingCart className="cart" />
          {cartItems.length > 0 && (
            <span className="cart-badge">{cartItems.length}</span>
          )}
        </div>

        {showCartDropdown && (
          <div className="cart-dropdown">
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <p>{item.name}</p>
                  <span>₹{item.price}</span>
                </div>
              ))
            )}
          </div>
        )}
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
