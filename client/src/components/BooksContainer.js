import React from "react";
// import axios from "axios";
// import BookDetail from "./BookDetail"
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import BookDetail from "./BookDetail";

export default class BooksContainer extends React.Component {
    state = {
        results: [],
        search: ""
    }

    searchBooks = query => {
        console.log(query)
        API.search(query)
            .then(res => {
                console.log(res.data.docs);
                this.setState({
                    results: res.data.docs
                })
            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.search);
        // console.log(this.state);
    }

    //WHen this component mounts, search for the movie    
    componentDidMount() {
        this.searchBooks("The lord of the rings");
        // axios.get("http://openlibrary.org/search.json?q=" + query)
        //     .then(res => {
        //         console.log(res.data.docs[0]);
        //         this.setState({ books: res.data });
        //     })
    }

    // A function to handle button clicks
    handleBtnClick() {

    }

    render() {
        console.log(this.state);
        return (
            <div>
                Hello
                <SearchForm
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit} />
                <BookDetail
                    details={this.state.results.map(result => {
                        return <div style={{ marginTop: "10px", border: "solid", width: "250px" }}>
                            <div><strong>Title: </strong>{result.title_suggest}</div>
                            <div><strong>Author: </strong>{result.author_name}</div>
                            <div><strong>Year Published: </strong>{result.first_publish_year}</div>
                            <button id="addBookBtn">Add Book</button>
                        </div>
                    })}
                />
            </div>
        )
    }
}
