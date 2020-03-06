import React from "react";
import API from "../utils/API";
const URL = "https://covers.openlibrary.org/b/id/";
const size = "-M.jpg";

export default class DeleteBook extends React.Component {
  state = {
    results: [],
    books: [],
    search: ""
  }

  // When this component mounts, load all saved books    
  componentDidMount() {
    // console.log(this.props.email)
    API.getBook(this.props.email)
      .then(res => {
        this.setState({ books: res.data })
      })
  }

  // Delete book when "Delete" button is clicked.
  handleBtnClick(id) {
    // console.log(id);
    API.deleteBook(id)
      // Reload remaining books still in database.
      .then(
        API.getBook(this.props.email)
          .then(res => {
            this.setState({ books: res.data })
          })
          .catch(err => {
            console.log(err);
          }))

      // .then(console.log("Book DELETED!"))
      .catch(err => console.log("Here's your error: " + err))
  };

  render() {
    // console.log(this.props.email)
    return (
      <div className="flex justify-center">
        <div className="flex justify-center flex-row flex-wrap">{this.state.books.map(result => {
          return <div className="flex-none grid grid-cols-2 text-center w-64 h-48 mx-auto my-4 bg-yellow-900 text-white rounded mr-4 md:mr-8 border" style={{ opacity: 0.8, borderColor: "#e2e8f05e" }}>
            <img src={URL + result.coverId + size} className="bg-cover rounded" style={{ height: "inherit" }} alt="Book Cover" />
            <div className="items-center mt-3 tracking-tight text-sm overflow-y-auto">
              <div className="deleteBookBtn"><strong>Title: </strong>{result.title}</div>
              <div><strong>Author: </strong>{result.author}</div>
              <div><strong>Year Published: </strong>{result.year}</div>
              <button className="hover:bg-red-500 bg-red-700 text-white font-bold mt-2 py-1 px-2 rounded-full" onClick={(event) => {
                event.preventDefault();
                this.handleBtnClick(result._id)
              }}>Delete</button>
            </div>
          </div>
        })}</div>
      </div>
    )
  }
}