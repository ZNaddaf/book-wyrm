import React, { Component } from 'react';
import API from "../utils/API";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    // When this component mounts, search for the movie "The Matrix"
    componentDidMount() {
        this.searchBooks("Great Gatsby");
    }

    searchBooks = query => {
        API.search(query)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <h1>Search for Book</h1>
                <p></p>
            </div>
        );
    }
}

export default Search;