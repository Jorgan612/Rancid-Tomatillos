import React from "react";
import '../CSS_styling/NavBar.css';

const NavBar = ({showMain}) => {
  return (
      <nav className="nav-bar">
        <h1>Rancid Tomatillos</h1>
        <div className="nav-button-div">
          <button onClick={event => showMain(event)}>Main Page</button>
        </div>
      </nav>
  )
}

export default NavBar;