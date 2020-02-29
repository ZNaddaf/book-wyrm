import axios from "axios";
const BASEURL = "http://openlibrary.org/search.json?title=";

export default {
  search: function (query) {
    return axios.get(BASEURL + query);
  },
  //gets all saved books
  getSaved: function () {
    return axios.get("/api/books");
  },
  //deletes saved book with given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  //saves an book
  saveBook: function (book) {
    return axios.post("/api/books", book);
  }
};