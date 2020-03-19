import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
  return (
    <div>
      <div className="Header">
        <div>
          <div class="row">
            <div class="col-md-12">
              <h1 className="headerText">
                WELL-MART Health Providers & Pharmaceutical Services
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
