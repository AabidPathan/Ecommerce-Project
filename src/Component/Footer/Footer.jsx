import React from "react";
import "./Footer.css";
import logo from "../../assets/OIP.jpeg";
import insta_icon from "../../assets/instagram.png";
import whatsapp_icon from "../../assets/whatsapp.png";
import facebook_icon from "../../assets/facebook.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="" height="50px" />
        <p>Shopify</p>
      </div>
      <ul className="footer-links">
        <li>About</li>
        <li>Products</li>
        <li>Offices</li>
        <li>Company</li>
        <li>Contect</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <img src={insta_icon} alt="" height="60px" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp_icon} alt="" height="60px" />
        </div>
        <div className="footer-icon-container">
          <img src={facebook_icon} alt="" height="60px" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright@20025-All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
