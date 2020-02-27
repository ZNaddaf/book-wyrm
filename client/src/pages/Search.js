import React, { Component } from 'react';
import SearchForm from "../components/SearchForm";
// import API from "../utils/API";
import Books from "../components/Books";

class Search extends Component {

    render() {
        return (
            <div>
                <h1>Search for Book</h1>
                <SearchForm />
                <Books />
            </div>
        );
    }
}

export default Search;