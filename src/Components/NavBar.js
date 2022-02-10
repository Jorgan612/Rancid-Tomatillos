import React from "react";
import '../CSS_styling/NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
      <nav className="nav-bar">
        <h1>Rancid Tomatillos</h1>
        <div className="nav-button-div">
          <NavLink to="/">
          <button>Main Page</button>
          </NavLink>
        </div>
      </nav>
  )
}

export default NavBar;