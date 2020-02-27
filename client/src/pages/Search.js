import React, { Component } from 'react';
import SearchForm from "../components/SearchForm"

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <SearchForm />
                <h1>Search for Book</h1>
            </div>
         );
    }
}
 
export default Search;