import React from "react";

/////////////////////////////////////
// SearchForm  
/////////////////////////////////////
function SearchForm(props) {
  return (
    <form className="flex flex-col m-auto h-auto text-gray-100">
      <button onClick={props.handleFormSubmit} className="btn btn=primary mt-1 text-lg font-semibold">
        Title:
      </button>
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="search"
        type="text"
        className="form-conrol"
        placeholder="Search by Title"
        id="search"
        className="appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-auto mb-3"
      />
    </form>
  )
}

export default SearchForm;
