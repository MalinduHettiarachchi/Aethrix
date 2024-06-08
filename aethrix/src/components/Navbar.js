import React from 'react';
import './Navbar.css' 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="brand">
          <a href="#">Aethrix</a>
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
