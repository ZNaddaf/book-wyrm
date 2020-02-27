import React from "react";
import axios from "axios";

export default class Books extends React.Component {
    state = {
        books: []
    }

    componentDidMount() {
        axios.get(`http://openlibrary.org/search.json?q=` + query)
            .then(res => {
                console.log(res.data.docs[0]);
                this.setState({ books: res.data });
            })
    }

    render() {
        return (
            <ul>
                Hello
                {/* {this.state.books.map(books => <li key={books.id}>{books.name}</li>)} */}
            </ul>
        )
    }
}
