import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Landing extends Component {
  render() {
    return (
      <div
        style={{
          height: "75vh",
          height: "300px",
          position: "fixed",
          top: "300px",
          left: "230px"
        }}
        className="container valign-wrapper"
      >
        <div className="row">
          <div className="col s12 center-align">
            <h3>
              <b style={{ color: "black" }}>User authentication</b>
            </h3>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable pink darken-1"
              >
                <b>Register</b>
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue darken-3"
              >
                <b>Log In</b>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
