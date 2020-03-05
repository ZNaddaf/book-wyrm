import React from "react";
import banner from "../assets/search_banner_green.png";

// SearchForm  
function SearchForm(props) {
  return (
<<<<<<< HEAD
    <form className="flex flex-col mt-6 mb-4 rounded m-auto h-auto w-1/2 bg-yellow-900 text-gray-100 shadow-lg">
      <button onClick={props.handleFormSubmit} className="btn btn=primary mt-1 text-lg font-semibold">
        Title:
=======
    <div>
      <img className="mb-3 app-banner" src={banner} alt="search banner" />
      <form className="flex flex-col mt-6 mb-4 rounded m-auto h-auto w-1/2 bg-yellow-900 text-gray-100 shadow-lg">
        <button onClick={props.handleFormSubmit} className="btn btn=primary mt-1 text-lg font-semibold">
          Search:
>>>>>>> a12882e304e67b6395faac93a662b76a2c18c372
      </button>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-conrol"
          placeholder="Search For a Book Title"
          id="search"
          className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-auto mb-3"
        />
      </form>
    </div>
  )
}

export default SearchForm;
