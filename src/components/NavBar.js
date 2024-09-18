import React from "react";
import "../styles/NavBar.css";
import { FaReact } from "react-icons/fa";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <FaReact className="logo-icon" /> SA ID Generator
      </div>
    </nav>
  );
}

export default NavBar;
