import React from "react";
// import API from "../utils/API";

function SavedBooks(props) {
    console.log(props.details)
    return (
        <div className="text-center">
            <div>{props.details.map(result => {
                return <div style={{ marginTop: "10px", border: "solid", width: "250px" }}>
                    <div className="addBookBtn"><strong>Title: </strong>{result.title}</div>
                    <div><strong>Author: </strong>{result.author}</div>
                    <div><strong>Year Published: </strong>{result.year}</div>
                    <div><strong>ID: </strong>{result.id}</div>
                </div>
            })}</div>
            {/* <h3>Author(s): {props.author_name}</h3>
                <h3>Genre: {props.subject[0]}</h3>
                <h3>Published year: {props.first_publish_year}</h3> */}
        </div>
    )
}

export default SavedBooks;