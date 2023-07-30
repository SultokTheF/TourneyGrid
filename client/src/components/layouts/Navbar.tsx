import React from "react";
import { Link } from "react-router-dom";

import Button from "../ui/Button";

import '../../assets/styles/Navbar.css';

import LogoImage from '../../assets/logo.png';

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={LogoImage} alt="Logo" className="logo-image" />
            TourneyGrid
          </Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links">
                Contact
              </Link>
            </li>
          </ul>
          <div className="nav-buttons">
            <Link to="/login" className='nav-links'>
              <Button body="Login" />
            </Link>
            <Link to="/register" className="nav-links">
              <Button body="Register"/>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;