import React from 'react';
// import SearchForm from "../components/SearchForm";
// import API from "../utils/API";
import BooksContainer from "../components/BooksContainer";
import { useAuth0 } from "../react-auth0-spa";
// import UserContext from "../utils/UserContext";

function Search(props) {
  const { user } = useAuth0();
  // console.log(user.email)
  return (
    <div>
      <BooksContainer {...user} />
    </div>
  );

}

export default Search;