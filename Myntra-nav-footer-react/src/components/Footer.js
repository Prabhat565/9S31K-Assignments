// src/components/Footer.js
import React from "react";
import "./Footer.css"; // We'll create this file next for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Returns</li>
            <li>Order Status</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li>Our Story</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Myntra Clone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
