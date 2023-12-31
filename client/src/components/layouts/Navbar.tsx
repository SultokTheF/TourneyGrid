import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import '../../assets/styles/layouts/Navbar.css';

import User from "../../types/User";
import userValidate from "../../helpers/userValidate";
import { userValidateEndpoint } from "../../helpers/endpoints";

import LogoImage from '../../assets/logo.png';

const Navbar: React.FC = () => {
  const [userData, setUserData] = useState<User | null>(null);

    useEffect( () => {
      if( !localStorage.getItem( "JWT" ) ) {
      } else {
        axios.get(
          userValidateEndpoint,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem( 'JWT' )}`,
              'Content-Type': 'application/json',
            },
          }
        ).then(response => {
          setUserData(response.data);
        }).catch(error => {
          localStorage.removeItem( 'JWT' );
          window.location.replace( '/' );
          console.error('Error fetching user data:', error);
        });
      }
  }, []);

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
            {localStorage.getItem('JWT') ? (
              <>
                {userData?.role === "admin" ? (
                  <>
                    {/* <div className="dropdown button">
                      <span>{userData?.username}</span>
                      <div className="dropdown-content">
                        <Link to="/logout">Logout</Link>
                      </div>
                      <div className="dropdown-content">
                        <Link to="/team/add">
                          Create Team
                        </Link>
                      </div>
                      <div className="dropdown-content">
                        <Link to="/tournament/add">
                          Create Tournament
                        </Link>
                      </div>
                    </div> */}
                    <div className="dropdown">
                      <button className="dropbtn">{userData?.username}</button>
                      <div className="dropdown-content">
                        <Link to="/tournament/add">
                          Create Tournament
                        </Link>
                        <Link to="/team/add">
                          Create Team
                        </Link>
                        <Link to="/" 
                          onClick={() => {
                            localStorage.removeItem( 'JWT' );
                            window.location.replace( '/' );
                          }}>
                          Logout
                        </Link>
                      </div>
                    </div>
                  </>
                ):(
                  <>
                    <div className="dropdown">
                      <button className="dropbtn">{userData?.username}</button>
                      <div className="dropdown-content">
                        <Link to="/tournament/add">
                          Join Team
                        </Link>
                        <Link to="/" 
                          onClick={() => {
                            localStorage.removeItem( 'JWT' );
                            window.location.replace( '/' );
                          }}>
                          Logout
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </>
            ):(
              <>
                <Link to="/login" className="button">
                  Login
                </Link>
                <Link to="/register" className="button">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;