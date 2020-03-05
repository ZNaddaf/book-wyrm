import React, { Fragment, useEffect, useState } from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import OldLibraryWallpaper from "../assets/OldLibraryWallpaper.jpg";
import styled, { keyframes } from "styled-components";

const LandingPage = () => {

  const useMediaQuery = (query) => {
    const mediaMatch = window.matchMedia(query);
    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
      const handler = e => setMatches(e.matches);
      mediaMatch.addListener(handler);
      return () => mediaMatch.removeListener(handler);
    });
    return matches;
  };

  const isRowBased = useMediaQuery('(min-width: 500px)');

  console.log("media query info:", isRowBased)

  var slide = keyframes`
  from { background-position: 0 0; }
  to { background-position: -400px 0
  `;

  const Container = styled.div`
  background: url(${OldLibraryWallpaper}) repeat 0 0;
  width: 100%;
  margin: 0;
  text-align: center;
  height: 300px;
  padding-top: 120px;
  box-sizing: border-box;
  animation: ${isRowBased ? slide : ""} 20s linear infinite;
  `

  return (
    <Container>
      <Fragment>
        <Hero />
        <Content />
      </Fragment>
    </Container>
  )
}

export default LandingPage;