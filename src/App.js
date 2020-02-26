import React from 'react';
import './App.css';
import Footer from "../src/components/Footer"
import Header from "./components/Header"
// import { BrowswerRouter as Router, Route } from "react-router-dom"
// import Wrapper from "./"
import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage';

function App() {
  return <div>
        <Header />
        <HomePage />
        <LandingPage />
        <Footer />
      </div>
}

export default App;
