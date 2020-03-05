import React from "react";


//Author Search Bar
function Author(props) {
    return (
        <form>
            <div>
                <label htmlFor="search">Author: </label>
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

export default Author;
