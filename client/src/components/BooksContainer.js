import React from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import BookDetail from "./BookDetail";
import Author from "../components/Author"
import banner from "../assets/search_banner_green.png";

export default class BooksContainer extends React.Component {
  state = {
    results: [],
    books: [],
    search: "",
    authorSearch: ""
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
    this.setState({
      authorSearch: value
    });
  };

  handleFormSubmit2 = event => {
    event.preventDefault();
    this.searchAuthor(this.state.authorSearch);
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
        <div className="m-auto w-1/3 shadow-lg rounded" style={{ backgroundColor: "#313b23" }}>
          <img src={banner} alt="search banner" className="border-gray-100" style={{ borderBottomWidth: "1px" }} />
          <SearchForm
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit} />
          <Author
            value={this.state.authorSearch}
            handleInputChange={this.handleInputChange2}
            handleFormSubmit={this.handleFormSubmit2} />
        </div>

        <div className="flex flex-row flex-wrap">
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