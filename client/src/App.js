import React from 'react';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import Search from "./pages/Search";
import Loading from "./components/Loading";
import NavBar from "./components/nav2";
import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import ExternalApi from "./components/ExternalApi";
import OldLibraryWallpaper from "./assets/OldLibraryWallpaper.jpg"





// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />
  }

  return (
    <div className="App min-h-screen">
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <div className="bg-scroll" style={{ backgroundImage: `url(${OldLibraryWallpaper})` }}>
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
