import React, { useState } from "react";
import { NavLink as RouterNavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth0 } from "../react-auth0-spa";


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin
    });

  // const testAuth = false

  return (
    <nav className="flex items-center justify-start flex-wrap p-6 bg-indigo-900 flex-shrink-0 text-white">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span class="font-semibold text-xl tracking-tight">Book Wyrm</span>
      </div>
      <ul className="flex text-white">
        <li className="flex-1 mr-2">
          <Link
            to="/"
            className={
              window.location.pathname === "/"
                ? "nav-link active; block mt-4 lg:inline-block lg:mt-0 hover:text-teal-200 mr-4"
                : "block mt-4 lg:inline-block lg:mt-0 hover:text-teal-200 mr-4"
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
                ? "nav-link active; block mt-4 lg:inline-block lg:mt-0 hover:text-teal-200 mr-4"
                : "block mt-4 lg:inline-block lg:mt-0 hover:text-teal-200 mr-4"
            }
          >
            Home
          </Link>
        </li>

        {isAuthenticated && (
          <div className="flex">
            <li className="flex-1 mr-2">
              <Link
                to="/search"
                className={
                  window.location.pathname === "/search"
                    ? "block mt-4 lg:inline-block lg:mt-0 hover:text-teal-200 mr-4"
                    : "block mt-4 lg:inline-block lg:mt-0 hover:text-teal-200 mr-4"
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
                    ? "block mt-4 lg:inline-block lg:mt-0 hover:text-teal-200 mr-4"
                    : "block mt-4 lg:inline-block lg:mt-0 hover:text-teal-200 mr-4"
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