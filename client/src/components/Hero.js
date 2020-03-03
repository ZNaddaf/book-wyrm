import React from "react";

import banner from "../assets/book_wyrm_banner.png";

const Hero = () => (
  <div className="text-center hero text-gray-100">
    <img className="mb-3 app-banner" src={banner} alt="wyrm banner" />
    <h1 className="mb-15">Welcome, fellow Book Wyrm!</h1>
    <h2>Log in or sign up to view and save your personalized reading list.</h2>


  </div>
);

export default Hero;
