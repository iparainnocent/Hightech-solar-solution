import React, { useState } from "react"; // Removed useEffect as it's no longer needed for fetch
import { Link } from "react-router-dom";
import {
  FaSolarPanel,
  FaHome,
  FaUserShield,
  FaEnvelope,
  FaProjectDiagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
// import axios from "../services/api"; // *** REMOVED: axios is no longer used ***
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [messageCount, setMessageCount] = useState(0); // *** REMOVED: messageCount and its setter are no longer used ***

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // *** The entire fetchMessageCount function was commented out in the last step ***

  // *** The useEffect that called fetchMessageCount is also now removed ***
  // Because messageCount state and fetchMessageCount function are gone,
  // this useEffect is empty and thus can be removed.
  /*
  useEffect(() => {
    // fetchMessageCount();
  }, []);
  */

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <FaSolarPanel size={24} />
        <span>Hightech Solar</span>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link to="/portfolio" onClick={closeMenu}>
            <FaProjectDiagram /> Portfolio
          </Link>
        </li>
        <li>
          <Link to="/products" onClick={closeMenu}>
            <FaSolarPanel /> Products
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>
            <FaEnvelope /> Contact
          </Link>
        </li>
        <li className="relative">
          <Link to="/admin" onClick={closeMenu}>
            <FaUserShield /> Dashboard
            {/* *** REMOVED: Badge display conditional is gone as messageCount state no longer exists *** */}
            {/* {messageCount > 0 && <span className="badge">{messageCount}</span>} */}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
