import React from "react";
import "../styles/navbar.css";
import lg from "../assets/logo/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <div className="logo">
          <img src={lg} alt="Internee.pk Logo" />
          {/* <span>Internee.pk</span> */}
        </div>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/internship">Internship</a>
          </li>
          <li>
            <a href="/graduate-program">Graduate Program</a>
          </li>
          <li>
            <a href="/company-collaboration">Company Collaboration</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className="cta-buttons">
          <a href="/job-portal" className="btn btn-job-portal">
            Job Portal
          </a>
          <a href="/login" className="btn btn-login">
            Internee's Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
