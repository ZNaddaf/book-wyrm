import axios from "axios";
const BASEURL = "http://openlibrary.org/search.json?q=";

export default {
  search: function (query) {
    return axios.get(BASEURL + query);
  }
};

