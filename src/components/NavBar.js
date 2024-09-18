import React from "react";
import "../styles/NavBar.css";
import { FaReact, FaGithub } from "react-icons/fa";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <FaReact className="logo-icon" /> SA ID Generatorss
      </div>
      <div className="navbar-github">
        <a
          href="https://github.com/MandlaHlaoli/sa-id-number-generator"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="github-icon" /> GitHub Repo
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
