import React from 'react';
const URL = "https://covers.openlibrary.org/b/id/";
const size = "-M.jpg";
function BookDetail(props) {
<<<<<<< HEAD
  // console.log(props)
  return (
    <div className="flex flex row text-center w-1/4 h-64 mx-auto my-4 bg-yellow-900 text-white opacity-75 rounded">
      <img className="bg-cover rounded" src={URL + props.cover_i + size} alt="Book Cover" />
      <div className="flex flex-col items-center mt-3">
        <div className="addBookBtn"><strong>Title: </strong>{props.title_suggest}</div>
        <div><strong>Author: </strong>{props.author_name}</div>
        <div><strong>Year Published: </strong>{props.first_publish_year}</div>
        <div><strong>ID: </strong>{props.cover_i}</div>
        <button className="addBookBtn" onClick={(event) => {
          event.preventDefault();
          props.handleBtnClick(props)
        }}>Add Book</button>
      </div>
    </div >
  )
=======
    return (
        <div className="text-center ">
              <div style={{ marginTop: "10px", border: "solid", width: "250px" }}>
                <img src={URL + props.cover_i + size} style={{ margin: "auto" }} alt="" />
                  <div className="addBookBtn"><strong>Title: </strong>{props.title_suggest}</div>
                  <div><strong>Author: </strong>{props.author_name}</div>
                  <div><strong>Year Published: </strong>{props.first_publish_year}</div>
                  <div><strong>ID: </strong>{props.cover_i}</div>
                  <button className="addBookBtn" onClick={(event) => {
                    event.preventDefault();
                    props.handleBtnClick(props)
                  }}>Add Book</button>
              </div>
        </div>
    )
>>>>>>> a12882e304e67b6395faac93a662b76a2c18c372
}

export default BookDetail