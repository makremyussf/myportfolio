// src/Navbar.js
import React from 'react';
import './Navbar.css'; // We'll style the navbar later

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>MakyCreativeSpace</h1>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;