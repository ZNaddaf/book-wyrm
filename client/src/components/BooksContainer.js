import React from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import BookDetail from "./BookDetail";

const URL = "http://covers.openlibrary.org/b/id/";
const size = "-M.jpg";


export default class BooksContainer extends React.Component {
  state = {
    results: [],
    books: [],
    search: ""
  }
  searchBooks = query => {
    API.search(query)
      .then(res => {
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
  }

  handleBtnClick(bookData) {
    console.log(bookData)
    API.saveBook({
      title: bookData.title_suggest,
      author: bookData.author_name,
      year: bookData.first_publish_year,
      coverId: bookData.cover_i
    })
      .then(res => API.getBooks())
      .catch(err => console.log(err));
  };

  // When this component mounts, load all saved books    
  componentDidMount() {
    API.getBooks()
      .then(res => {
        this.setState({ books: res.data })
      })
  }


  render() {
    console.log(this.state.books);
    return (
      <div>
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit} />
        <BookDetail
          details={this.state.results.map(result => {
            return <div style={{ marginTop: "10px", border: "solid", width: "250px" }}>
              <img src={URL + result.cover_i + size} style={{ margin: "auto" }} alt="" />
              <div className="addBookBtn"><strong>Title: </strong>{result.title_suggest}</div>
              <div><strong>Author: </strong>{result.author_name}</div>
              <div><strong>Year Published: </strong>{result.first_publish_year}</div>
              <div><strong>ID: </strong>{result.cover_i}</div>
              <button className="addBookBtn" onClick={(event) => {
                event.preventDefault();
                this.handleBtnClick(result)
              }}>Add Book</button>
            </div>
          })}
        />
      </div>
    )
  }
}