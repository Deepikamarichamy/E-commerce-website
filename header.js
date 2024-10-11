import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>E-Commerce Site</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;