import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Hightech Solar Solution</h2>
        <p>
          Delivering affordable and sustainable solar energy solutions across
          Kenya.
        </p>
        <div className="footer-links">
          <a href="/portfolio">Projects</a>
          <a href="/products">Products</a>
          <a href="/contact">Contact</a>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Hightech Solar Solution. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
