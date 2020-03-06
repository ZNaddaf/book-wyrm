import React from 'react';
import HomePage from './pages/HomePage';
import Search from "./pages/Search";
import NavBar from "./components/navbar";
import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import ExternalApi from "./components/ExternalApi";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <div>
          <Switch>
            <PrivateRoute path="/profile" component={Profile} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/search" component={Search} />
            <Route path="/" exact component={HomePage} />
            <PrivateRoute path="/external-api" component={ExternalApi} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;