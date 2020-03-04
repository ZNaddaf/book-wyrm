import React from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import BookDetail from "./BookDetail";

const URL = "https://covers.openlibrary.org/b/id/";
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
      // email: this.props.userEmail,
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
    // console.log(this.state.books);
    console.log(this.props.user.email)
    return (
      <div>
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit} />
        <div className="flex flex-row flex-wrap justify-center w-full mx-auto">
          {this.state.results.map(result => {
            return <BookDetail
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