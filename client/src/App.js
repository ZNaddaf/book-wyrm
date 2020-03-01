import React from 'react';
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Wrapper from "./components/Wrapper";
import { Container } from "reactstrap";

import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Search from "./pages/Search";
import Profile from "./pages/Profile";

import PrivateRoute from "./components/PrivateRoute";
import Loading from "./components/Loading";
import NavBar from "./components/navbar2";
import Footer from "./components/Footer";
// import Home from "./views/Home";
// import Profile from "./views/Profile";
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";


// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app">
        <NavBar />
        <Container className="flex-grow-1 mt-5 bg-green-200">
          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/search" component={Search} />
            <PrivateRoute path="/profile" component={Profile} />
            <Route path="/" exact component={LandingPage} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
