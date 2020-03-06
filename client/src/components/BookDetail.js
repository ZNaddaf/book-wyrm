import React from 'react';
const URL = "https://covers.openlibrary.org/b/id/";
const size = "-M.jpg";
function BookDetail(props) {

  return (
    <div className="flex-none grid grid-cols-2 text-center w-64 h-48 mx-auto my-4 bg-yellow-900 text-white opacity-75 rounded">
      <img style={{ height: "inherit" }} className="bg-cover h-full rounded" src={URL + props.cover_i + size} alt="Book Cover" />
      <div className="items-center mt-3 tracking-tight text-sm">
        <div className="addBookBtn"><strong>Title: </strong>{props.title_suggest}</div>
        <div><strong>Author: </strong>{props.author_name}</div>
        <div><strong>Year Published: </strong>{props.first_publish_year}</div>
        <button className="addBookBtn" onClick={(event) => {
          event.preventDefault();
          props.handleBtnClick(props)
        }}>Add Book</button>
      </div>
    </div >
  )
}

export default BookDetail