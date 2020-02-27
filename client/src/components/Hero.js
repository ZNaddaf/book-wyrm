import React from "react";

import logo from "../assets/wyrm_logo.png";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Sample header</h1>

    <p className="lead">
      This a sample hero component for the application
    </p>
  </div>
);

export default Hero;
