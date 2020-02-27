import React from "react";

function SearchForm(props) {
    return (
        <form>
        <div className="form-group">
            <input
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            className="form-conrol"
            placeholder="Search For a Book"
            id="search"
            />
            <br />
            <button onClick={props.handleFormSubmit} className="btn btn=primary">
                Search
                </button>
        </div>
        </form>
    )
}

export default SearchForm;