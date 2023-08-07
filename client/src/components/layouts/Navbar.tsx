import React from "react";
import { Link } from "react-router-dom";

import '../../assets/styles/layouts/Navbar.css';

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
              <Link to="/team" className="nav-links">
                Teams
              </Link>
            </li>
          </ul>
          <div className="nav-buttons">
            <a className="button"> Create Tournament </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;