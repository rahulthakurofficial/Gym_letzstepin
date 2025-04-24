import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-overlay">
        <div className="footer-container">
          <div className="footer-section">
            <h4>Get In Touch</h4>
            <p>
              <i className="fa fa-map-marker-alt"></i> pune
            </p>
            <p>
              <i className="fa fa-phone-alt"></i> +91 8799919578
            </p>
            <p>
              <i className="fa fa-envelope"></i>reachus@letzstepin.com
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">
                  <i className="fa fa-angle-right"></i> Home
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <i className="fa fa-angle-right"></i> About Us
                </Link>
              </li>
              <li>
                <Link to="/features">
                  <i className="fa fa-angle-right"></i> Our Features
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <i className="fa fa-angle-right"></i> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Social Links</h4>
            <div className="social-icons">
              <Link to="/">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="/">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="/">
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>

          {/* <div className="footer-section">
            <h4>Opening Hours</h4>
            <p>
              <strong>Monday - Friday</strong>
              <br />
              8.00 AM - 8.00 PM
            </p>
            <p>
              <strong>Saturday - Sunday</strong>
              <br />
              2.00 PM - 8.00 PM
            </p>
          </div> */}
        </div>
        <hr className="footer-divider" />
        <div className="footer-content centered-footer">
          <p className="text-center">
            &copy;{" "}
            <Link className="" to="/">
              LetZstepin
            </Link>{" "}
            All Rights Reserved
            <Link className="" to="/">
              {" "}
              2025
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
