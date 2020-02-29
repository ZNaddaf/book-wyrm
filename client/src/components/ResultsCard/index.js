import React from 'react';
import './style.css';

function ResultsCard(props) {

    return (
        <div className="row">
            <div id="results" className="col s12 m6">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">{props.saved ? "Saved" : "Results"}</span>
                        <br />
                        {   
                            !props.books ? "No results, use the searchbar above to look up a book." :
                            props.books.map((book) => {
                                return(
                                    <ul className="collection">
                                        <li className="collection-item">
                                            <div id="title" className="row">
                                                <h5 className="title col s9">{props.saved ? book.title : book.volumeInfo.title}</h5>
                                                <a className="waves-effect waves-light btn" onClick={() => props.handleSaveDelete(book._id || book.id)}>{props.saved ? "Delete" : "Save"}</a>
                                                <a className="waves-effect waves-light btn" href={props.saved ? book.link :book.volumeInfo.infoLink} target="_blank">View</a>
                                            </div>
                                            <div className="row">
                                                <span>Written By: {props.saved ? book.authors : book.volumeInfo.authors.join(", ")}</span>
                                            </div>
                                            <div className="row center-align">
                                                <img className="col s2" src={props.saved ? book.image : book.volumeInfo.imageLinks.thumbnail} alt="" />
                                                <p className="col s10">{props.saved ? book.description : book.volumeInfo.description}</p>
                                            </div>
                                        </li>
                                    </ul>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultsCard;