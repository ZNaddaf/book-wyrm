import React, { Component } from 'react';
// import SearchForm from "../components/SearchForm";
// import API from "../utils/API";
import BooksContainer from "../components/BooksContainer";

class Search extends Component {

    render() {
        return (
            <div>
                <h1>Search for Book</h1>
                
                <BooksContainer />
            </div>
        );
    }
}

export default Search;