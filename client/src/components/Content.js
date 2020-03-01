import React, { Component } from "react";

// import contentData from "../utils/contentData";
import botm from "../assets/botm_mint.png";

class Content extends Component {
  render() {
    return (
      <div className="next-steps my-5">
        <div className="text-center hero my-5">

          <img className="mb-3 app-botm" src={botm} alt="book of the month" />

          <p className="lead">
            Book Recommendation Will Go Here
          </p>
        </div>
        <h2 className="my-5 text-center">Content.js component</h2>
      </div>
    );
  }
}

export default Content;
