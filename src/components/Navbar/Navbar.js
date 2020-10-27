import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <NavLink to="/" className="navbar__home">
          Logo
        </NavLink>
      </div>
      <ul className="navbar__nav">
        <li className="navbar__item">
          <NavLink className="navbar__link" to="/login">
            Login
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to="/signup">
            Signup
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
