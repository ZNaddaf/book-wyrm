import React, { Component } from 'react';
import BooksContainer from "../components/BooksContainer";

class Search extends Component {

  render() {
    return (
      <div className="bg-fixed min-h-screen">
        <h1>Search for Book</h1>

        <BooksContainer />
      </div>
    );
  }
}

export default Search;