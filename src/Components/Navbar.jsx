import React from "react";
import { useNavigate } from "react-router-dom";
import SohraLogo from "../Components/logo/sohra-updated.png";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        <div
          className="navbar-logo"
          onClick={() => navigate("/")}
          tabIndex={0}
          role="button"
        >
          <img
            src={SohraLogo}
            alt="Sohra Metal Logo"
            className="navbar-logo-img"
          />
        </div>
        
        {/* Centered navigation links */}
        <ul className="navbar-links navbar-links-center">
          <li onClick={() => navigate("/")} className="navbar-link">Home</li>
          <li onClick={() => navigate("/about")} className="navbar-link">AboutUs</li>
          <li onClick={() => navigate("/Productsredirect")} className="navbar-link">Products</li>
          <li onClick={() => navigate("/TeamPage")} className="navbar-link">Team</li>
        </ul>

        {/* Contact Us button on the right */}
        <button 
          className="contact-button"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
