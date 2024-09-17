import React from "react";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">SA ID Generator</div>
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
