import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import icon from "../../assets/images/icon.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <ul id="nav-mobile" class="right">
          <img src={icon} className="Icon" />
          <li>
            <Link
              to="/login"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/login"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Login/Logout
            </Link>
          </li>
          <li>
            <Link
              to="/discover"
              className={
                window.location.pathname === "/discover"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Find a Doctor
            </Link>
          </li>
          <li>
            <Link
              to="/search"
              className={
                window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Find a Pharmacy
            </Link>
          </li>
          <li>
            <Link
              to="/news"
              className={
                window.location.pathname === "/news"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Healh & Wellness News
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
