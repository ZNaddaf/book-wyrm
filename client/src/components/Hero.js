import React from "react";

import logo from "../assets/wyrm_logo.png";
import botm from "../assets/botm.png";

const Hero = () => (
  <div className="text-center hero my-5">
    <h1 className="mb-15">Welcome, fellow Book Wyrm!</h1>
    <img className="mb-3 App-logo" src={logo} alt="wyrm logo" width="250" />
    <h2 className="mb-4">Book of the Month</h2>

    <p className="lead">
      Book Recommendation Will Go Here
    </p>

    <img className="mb-3 app-botm" src={botm} alt="book of the month" width="500" />
  </div>
);

export default Hero;
