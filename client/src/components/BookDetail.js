import React from 'react';

function BookDetail(props) {
    // console.log(props)
    return (
        <div className="text-center">
            <div>{props.details}</div>
            {/* <h3>Author(s): {props.author_name}</h3>
            <h3>Genre: {props.subject[0]}</h3>
            <h3>Published year: {props.first_publish_year}</h3> */}

        </div>
    )
}

export default BookDetail