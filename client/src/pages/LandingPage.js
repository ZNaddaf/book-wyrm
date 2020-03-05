import React, { Fragment, useEffect, useState } from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import OldLibraryWallpaper from "../assets/OldLibraryWallpaper.jpg";
import styled, { keyframes } from "styled-components";

const LandingPage = () => {

  return (
    <Fragment>
      <Hero />
      <Content />
    </Fragment>
  )
}

export default LandingPage;