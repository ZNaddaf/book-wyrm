import React from 'react';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/search" component={Search} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
