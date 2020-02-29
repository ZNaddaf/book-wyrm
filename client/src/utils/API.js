import axios from "axios";
const BASEURL = "http://openlibrary.org/search.json?title=";

export default {
  search: function (query) {
    return axios.get(BASEURL + query);
  }
};

