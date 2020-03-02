import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Loading from "./components/Loading";
import NavBar from "./components/navbar";
import Footer from "./components/Footer";
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";
// import OldLibraryWallpaper from "./assets/OldLibraryWallpaper.png"


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
        <div className="flex-grow-1">
          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/search" component={Search} />
            <PrivateRoute path="/profile" component={Profile} />
            <Route path="/" exact component={LandingPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
