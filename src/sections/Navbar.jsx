import React, { useState } from "react";
import { Link } from "react-scroll"; 
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="home" smooth={true} duration={500} offset={-70} onClick={() => setMenuOpen(false)}>Manan</Link>
      </div>

      {/* Desktop & Mobile Menu */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="home" smooth={true} duration={500} offset={-70} className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-70} className="nav-link" onClick={() => setMenuOpen(false)}>About</Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={500} offset={-70} className="nav-link" onClick={() => setMenuOpen(false)}>Services</Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} offset={-70} className="nav-link" onClick={() => setMenuOpen(false)}>Projects</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-70} className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
