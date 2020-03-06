import React, { Component } from "react";

// import contentData from "../utils/contentData";
import botm from "../assets/botm_green.png";

class Content extends Component {
  render() {
    return (
      <div>
        <img className="mx-auto w-2/3 md:w-2/5" src={botm} alt="book of the month" />
        <p className="lead">
          {/* Book Recommendation Will Go Here */}
        </p>
        <h2 className="mt-5 text-center">
          {/* Content.js component */}
        </h2>
      </div>
    );
  }
}

export default Content;
