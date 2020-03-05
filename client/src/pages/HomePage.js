import React, { Fragment } from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import "./animation.css";

const HomePage = () => (

  <div className="hero-bkg-animated">
    <Fragment>
      <Hero />
      <Content />
    </Fragment>
  </div>
);

export default HomePage;