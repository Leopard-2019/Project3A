import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div class="container">
        {/* <div>
          <a target="_blank" class="social-icons" href="">
            <img
              src="https://cdn-static.findly.com/wp-content/uploads/sites/194/2016/04/facebook.png"
              alt="LinkedIn"
            ></img>
          </a>
          <a target="_blank" class="social-icons" href="">
            <img
              src="https://cdn-static.findly.com/wp-content/uploads/sites/194/2016/04/twitter.png"
              alt="LinkedIn"
            ></img>
          </a>
          <a target="_blank" class="social-icons" href="">
            <img
              src="https://cdn-static.findly.com/wp-content/uploads/sites/194/2016/04/youtube.png"
              alt="LinkedIn"
            ></img>
          </a>
          <a target="_blank" class="social-icons" href="">
            <img
              src="https://cdn-static.findly.com/wp-content/uploads/sites/194/2016/04/instagram.png"
              alt="LinkedIn"
            ></img>
          </a>
          <a target="_blank" class="social-icons" href="">
            <img
              src="https://cdn-static.findly.com/wp-content/uploads/sites/194/2016/04/pinterest.png"
              alt="LinkedIn"
            ></img>
          </a>
        </div> */}
        <p>
          Copyright 2020
          <a href="" class="footer-links">
            {" "}
            WELL-MART Healthcare and Pharmaceutical Services, Inc.
          </a>{" "}
          All rights reserved.
          <p class="footer-links">
            <a href="" title="contact us" class="footer-links">
              Contact Us |
            </a>
            <a href="" title="terms of use" class="footer-links">
              {" "}
              Term of Use |
            </a>
            <a href="" title="terms of privacy" class="footer-links">
              {" "}
              Privacy Policy
            </a>
          </p>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
