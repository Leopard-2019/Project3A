import React from "react";
import { render } from "react-dom";

import AboutCardMission from "../components/AboutCardMission";

import Footer from "../components/Footer";

const About = () => (
  <div class="container">
    <br></br>

    <AboutCardMission />
  </div>
);

render(<About />, document.getElementById("root"));

export default About;
