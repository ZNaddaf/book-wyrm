import React, { useState } from "react";
import { NavLink as RouterNavLink, Link } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";
import BookWyrmLogo from "../assets/BookWyrmLogo.png"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin
    });

  return (
    <nav className="flex items-center flex-wrap bg-indigo-900 text-white p-1">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img className="fill-current h-16 w-16 mr-2" src={BookWyrmLogo} alt="Book Wyrm Logo" />
        <span className="font-semibold text-xl tracking-tight" style={{ fontFamily: "cursive" }}>Book Wyrm</span>
      </div>
      <ul className="flex text-white">
        <li className="flex-1 mr-2">
          <Link
            to="/"
            className={
              window.location.pathname === "/"
                ? "block lg:inline-block hover:text-teal-200 mr-4"
                : "block lg:inline-block hover:text-teal-200 mr-4"
            }
          >
            Landing
          </Link>
        </li>

        <li className="flex-1 mr-2">
          <Link
            to="/home"
            className={
              window.location.pathname === "/home"
                ? "block lg:inline-block hover:text-teal-200 mr-4"
                : "block lg:inline-block hover:text-teal-200 mr-4"
            }
          >
            Home
          </Link>
        </li>

        {!isAuthenticated && (
          <div className="flex">
            <li className="flex-1 mr-2">
              <Link
                to="/search"
                className={
                  window.location.pathname === "/search"
                    ? "block lg:inline-block hover:text-teal-200 mr-4"
                    : "block lg:inline-block hover:text-teal-200 mr-4"
                }
              >
                Search
            </Link>
            </li>

            <li className="flex-1 mr-2">
              <Link
                to="/profile"
                className={
                  window.location.pathname === "/profile"
                    ? "block lg:inline-block hover:text-teal-200 mr-4"
                    : "block lg:inline-block hover:text-teal-200 mr-4"
                }
              >
                Profile
            </Link>
            </li>
          </div>
        )}

      </ul>
      {!isAuthenticated && (
        <li className="flex justify-end flex-end flex-1 mr-2">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => loginWithRedirect({})} >
            Login/Sign-up
          </button>
        </li>
      )}
    </nav>
  );
};

export default NavBar;