import React from "react";
import API from "../utils/API";
const URL = "http://covers.openlibrary.org/b/id/";
const size = "-M.jpg";

export default class DeleteBook extends React.Component {
    state = {
        results: [],
        books: [],
        search: ""
    }

    // When this component mounts, load all saved books    
    componentDidMount() {
        API.getBooks()
            .then(res => {
                this.setState({ books: res.data })
            })
    }
    handleBtnClick(result) {
        API.deleteBook({
            id: result.cover_i
        })
            .then(res => API.getBooks())
            .then(dbBook => dbBook.remove())
            .then(dbBook => result.json(dbBook))
            // .then(console.log("Book saved!"))
            .catch(err => console.log(err))
    };

    render() {
        return (
            <div className="text-center" >
                <div>{this.state.books.map(result => {
                    return <div style={{ marginTop: "10px", border: "solid", width: "250px" }}>
                        <img src={URL + result.id + size} style={{ margin: "auto" }} />
                        <div className="deleteBookBtn"><strong>Title: </strong>{result.title}</div>
                        <div><strong>Author: </strong>{result.author}</div>
                        <div><strong>Year Published: </strong>{result.year}</div>
                        <div><strong>ID: </strong>{result.id}</div>
                        <button onClick={(event) => {
                            event.preventDefault();
                            this.handleBtnClick(result)
                        }}>Delete</button>
                    </div>
                })}</div>
            </div>
        )
    }
}
