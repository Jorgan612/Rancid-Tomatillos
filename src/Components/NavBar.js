import React from "react";
import '../CSS_styling/NavBar.css';

const NavBar = () => {
  return (
      <nav className="nav-bar">
        <h1>Rancid Tomatillos</h1>
        <div className="nav-button-div">
          <button>Main Page</button>
        </div>
      </nav>
  )
}

export default NavBar;