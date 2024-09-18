import React from "react";
import { FaReact } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} South African ID Number Generator</p>
        <p>
          Developed with <FaReact className="icon react-icon" /> by{" "}
          <span className="developer-name">[Mandla]</span>
        </p>
        <p className="social-note">Feel free to connect with me on:</p>
        <div className="footer-links">
          <a
            href="https://github.com/HlaoliMandla"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a
            href="https://facebook.com/Mandla171"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </a>
          <a
            href="https://wa.me/+27656194750"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
