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
        console.log(id);
        API.deleteBook(id)
            // Reload remaining books still in database.
            .then(res =>
                API.getBook().then(res => {
                    this.setState({ books: res.data })
                }))
            .then(console.log("Book DELETED!"))
            .catch(err => console.log(err))
    };

    render() {
        return (
            <div className="text-center" >
                <div>{this.state.books.map(result => {
                    return <div style={{ marginTop: "10px", border: "solid", width: "250px" }}>
                        <img src={URL + result.coverId + size} style={{ margin: "auto" }} />
                        <div className="deleteBookBtn"><strong>Title: </strong>{result.title}</div>
                        <div><strong>Author: </strong>{result.author}</div>
                        <div><strong>Year Published: </strong>{result.year}</div>
                        <div><strong>ID: </strong>{result.coverId}</div>
                        <button onClick={(event) => {
                            event.preventDefault();
                            this.handleBtnClick(result._id)
                        }}>Delete</button>
                    </div>
                })}</div>
            </div>
        )
    }
}