import React from "react";
// import axios from "axios";
// import BookDetail from "./BookDetail"
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import BookDetail from "./BookDetail";


export default class BooksContainer extends React.Component {
    state = {
        results: {},
        search: ""
    }

    searchBooks = query => {
        console.log(query)
        API.search(query)
            //.then(res => console.log(res.data.docs[0]))
            .then(res => {
                console.log(res.data.docs);
                this.setState({ results: res.data.docs[0] })
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
                    title={this.state.results.title_suggest}
                />
                {/* {this.state.books.map(books => <li key={books.id}>{books.name}</li>)} */}
            </div>
        )
    }
}
