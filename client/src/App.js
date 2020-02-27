import React from 'react';
import './App.css';
// import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";

// New - import the React Router components, and the Profile page component
// import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <NavBar />
        </header>

        <div>
          <Header />
          <Wrapper>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
          </Wrapper>
        </div>

        <Switch>
          <Route path="/" exact />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
