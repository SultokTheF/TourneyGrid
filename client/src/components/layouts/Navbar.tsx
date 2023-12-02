import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import '../../assets/styles/layouts/Navbar.css';

import User from "../../types/User";

import LogoImage from '../../assets/logo.png';

const Navbar: React.FC = () => {
  const [userData, setUserData] = useState<User | null>(null);

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
            <li className="nav-item">
              <Link to="/team" className="nav-links">
                Tournaments
              </Link>
            </li>
          </ul>
          <div className="nav-buttons">
            <Link to="/team/add" className="button">
              Create Team
            </Link>
            <Link to="/tournament/add" className="button">
              Create Tournament
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;