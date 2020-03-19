import React from "react";
import { render } from "react-dom";
import Login from "../components/Login";
import "../pages/style.css";

const Login = () => (
  <div>
    <Login />
  </div>
);

render(<Login />, document.getElementById("root"));

export default Login;
