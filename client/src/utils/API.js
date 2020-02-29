import axios from "axios";
const BASEURL = "http://openlibrary.org/search.json?title=";

export default {
  search: function (query) {
    return axios.get(BASEURL + query);
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  }
};