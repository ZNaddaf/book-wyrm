import React from 'react';
import BooksContainer from "../components/BooksContainer";
import { useAuth0 } from "../react-auth0-spa";
/////////////////////////////////////
// import books container for search population
/////////////////////////////////////
function Search(props) {
  const { user } = useAuth0();
  return (
    <div>
      <BooksContainer {...user} />
    </div>
  );
}
export default Search;