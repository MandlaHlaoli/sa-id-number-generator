import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} South African ID Number Generator</p>
        <p>Developed with ❤️ by Mandla Hlaoli</p>
        <div className="footer-links">
          <a href="/terms" className="footer-link">
            Terms of Service
          </a>
          <a href="/privacy" className="footer-link">
            Privacy Policy
          </a>
          <a href="/contact" className="footer-link">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
