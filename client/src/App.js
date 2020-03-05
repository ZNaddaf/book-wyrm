import React from 'react';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import Search from "./pages/Search";
import Loading from "./components/Loading";
import NavBar from "./components/navbar";
// import Footer from "./components/Footer";
// import { Container } from "reactstrap";
// import Auth0 SPA 
import { useAuth0 } from "./react-auth0-spa";
// import the React Router components, and the Profile page component
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile";
import history from "./utils/history";
// import the PrivateRoute component
import PrivateRoute from "./components/PrivateRoute";
// import the ExternalApi component
import ExternalApi from "./components/ExternalApi";

import OldLibraryWallpaper from "./assets/OldLibraryWallpaper.jpg"


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
        <div className="bg-scroll h-screen p-5" style={{ backgroundImage: `url(${OldLibraryWallpaper})` }}>
          <Switch>
            <PrivateRoute path="/profile" component={Profile} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/search" component={Search} />
            <Route path="/" exact component={LandingPage} />
            {/*add a route to the ExternalApi component */}
            <PrivateRoute path="/external-api" component={ExternalApi} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;