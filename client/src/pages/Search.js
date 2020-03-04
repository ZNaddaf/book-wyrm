import React, { Component } from 'react';
// import SearchForm from "../components/SearchForm";
// import API from "../utils/API";
import BooksContainer from "../components/BooksContainer";
import { useAuth0 } from "../react-auth0-spa";
// import UserContext from "../utils/UserContext";

function Search(props) {
  const { user } = useAuth0();
  // console.log(user.email)
  return (
    <div className="text-gray-100">
      <h1>Search for Book</h1>

      <BooksContainer {...user} />
      {/* <BooksContainer /> */}

    </div>
  );

}

export default Search;