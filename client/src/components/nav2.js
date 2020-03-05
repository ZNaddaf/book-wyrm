// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { NavLink as Link } from "react-router-dom";
import BookWyrmLogo from "../assets/BookWyrmLogo.png"

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="lg:justify-start justify-center flex items-center  text-white p-1 font-semibold text-xl tracking-tight" style={{ fontFamily: "cursive", backgroundColor: "#313b23" }}>
      <Link to="/">
        <img className="fill-current h-8 w-8" src={BookWyrmLogo} alt="Book Wyrm Logo" />
      </Link>&nbsp;
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && <button className="hover:text-teal-200 mr-4" onClick={() => logout()}>Log out</button>}

      {/* add a link to the home search and profile pages */}
      {isAuthenticated && (
        <span>
          <Link className="hover:text-teal-200 mr-4" to="/">Home</Link>&nbsp;
            <Link className="hover:text-teal-200 mr-4" to="/profile">Profile</Link>
          <Link className="hover:text-teal-200 mr-4" to="/search">Search</Link>
          {/*Add a link to the /external-api route */}
          <Link className="hidden hover:text-teal-200 mr-4" to="/external-api">External API</Link>
        </span>
      )}
    </div>
  );
};

export default NavBar;