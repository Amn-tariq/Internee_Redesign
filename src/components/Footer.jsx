import React from "react";
import "../styles/footer.css"; // Ensure this file contains the necessary styles
import logo from "../assets/logo/logo.png"; // Replace with your logo file
import Button from "./Button";

function Footer() {
  return (
    <footer className="footer container">
      <div className="footer-brand">
        <img src={logo} alt="Logo" className="footer-logo" />
        <p>
          The ultimate platform designed to turbocharge the IT sector in
          Pakistan.
        </p>
        <p>Email: support@example.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>NIC Karachi, NED University</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      <div className="footer-links">
        <div>
          <p>Company</p>
          <ul>
            <li>
              <a href="#about">Contact Us</a>
            </li>
            <li>
              <a href="#services">Internships</a>
            </li>
            <li>
              <a href="#privacy">Company</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-links">
        <div>
          <p>Help</p>
          <ul>
            <li>
              <a href="#about">Job Portal</a>
            </li>
            <li>
              <a href="#services">Task Portal</a>
            </li>
            <li>
              <a href="#contact">LMS</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="newsletter">
        <p>Subscribe to our newsletter</p>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#43a724] caret-[#43a724]"
        />
        <Button
          text="subscribe"
          styleClass="butn"
          onClick={() => console.log("Subscribed")}
        />
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
