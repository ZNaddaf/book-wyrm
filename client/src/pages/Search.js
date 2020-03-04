import React, { Component } from 'react';
// import SearchForm from "../components/SearchForm";
// import API from "../utils/API";
import BooksContainer from "../components/BooksContainer";
import OldLibraryWallpaper from "../assets/OldLibraryWallpaper.jpg"

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