import React from "react";
import "./Footer.css";
import logo from "./logo/sohra-updated.png";
import makeInIndia from "./logo/Make_In_India.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons"; // ✅ Added WhatsApp

const Footer = () => (
  <footer className="sohra-footer">
    <div className="sohra-footer-row">
      <div className="footer-col left">
        <img
          src={logo}
          className="footer-logo-main"
          alt="Sohra UPVC Industries"
        />
      </div>
      <div className="footer-col center">
        <div className="footer-contact left-align">
          <div>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
            Serve No. 487/2 min, Near Jaggkhedi Panchayat Bhawan, Sanjeet Road,
          </div>
          <div>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
            Village: Jaggkhedi, Dist.: Mandsaur, M.P.
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} className="icon" />
            Mobile No.: 7470955631
          </div>
        </div>
      </div>
      <div className="footer-col right">
        <img
          src={makeInIndia}
          className="footer-makeinindia"
          alt="Make in India"
        />
        <br />
        <div className="footer-social-label">Follow us on</div>
        <div className="footer-social">
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          {/* ✅ WhatsApp link */}
          <a
            href="https://wa.me/7470955631"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
    </div>
    <div className="footer-copy">
      © {new Date().getFullYear()} Sohra UPVC Industries. All Rights Reserved.
    </div>
  </footer>
);

export default Footer;
