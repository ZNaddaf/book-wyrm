import React from "react";

function SearchForm(props) {
    return (
        <form>
            <div>
                <label htmlFor="search">Search: </label>
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
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
