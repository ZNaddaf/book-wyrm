const router = require("express").Router();
const booksController = require("../controllers/bookController");

// Matches with "/api/books"
router
  .route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/delete/:id"
router
  .route("/delete/:id")
  // .get(booksController.findById)
  .delete(booksController.remove);

// Matches with "/api/books/:email"
router
  .route("/:email")
  .get(booksController.find)
// .delete(booksController.remove);

module.exports = router;