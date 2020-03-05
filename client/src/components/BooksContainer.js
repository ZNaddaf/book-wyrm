import React from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import BookDetail from "./BookDetail";
import Author from "../components/Author"

export default class BooksContainer extends React.Component {
  state = {
    results: [],
    books: [],
    search: ""
  }

  // Title Search ====================== 
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

    API.saveBook({
      email: bookData.userEmail,
      title: bookData.title_suggest,
      author: bookData.author_name,
      year: bookData.first_publish_year,
      coverId: bookData.cover_i
    })
      .catch(err => console.log(err));
  };

  // Author search =====================
  searchAuthor = query => {
    API.searchAuthor(query)
      .then(res => {
        this.setState({
          results: res.data.docs
        })
      })
      .catch(err => console.log(err));
  }

  handleInputChange2 = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit2 = event => {
    event.preventDefault();
    this.searchAuthor(this.state.search);
  }

  handleBtnClick2(bookData) {
    API.saveBook({
      email: bookData.userEmail,
      title: bookData.title_suggest,
      author: bookData.author_name,
      year: bookData.first_publish_year,
      coverId: bookData.cover_i
    })
      .catch(err => console.log(err));
  };


  // Rendering Search bars (title/author) to page
  render() {
    return (
      <div>
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit} />
        <Author
          value={this.state.search}
          handleInputChange={this.handleInputChange2}
          handleFormSubmit={this.handleFormSubmit2} />

        <div className="flex flex-row flex-wrap gap-3">
          {this.state.results.map(result => {
            return <BookDetail
              userEmail={this.props.email}
              author_name={result.author_name}
              cover_i={result.cover_i}
              handleBtnClick={this.handleBtnClick}
              title_suggest={result.title_suggest}
              first_publish_year={result.first_publish_year}
            />
          }
          )}
        </div>
      </div >
    )
  }
}