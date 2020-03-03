// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { NavLink as Link } from "react-router-dom";

const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div>
            {!isAuthenticated && (
                <button onClick={() => loginWithRedirect({})}>Log in</button>
            )}

            {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

            {/* add a link to the home search and profile pages */}
            {isAuthenticated && (
                <span>
                    <Link to="/">Home</Link>&nbsp;
            <Link to="/profile">Profile</Link>
                    <Link to="/search">Search</Link>
                    {/*Add a link to the /external-api route */}
                    <Link to="/external-api">External API</Link>
                </span>
            )}
        </div>
    );
};

export default NavBar;