const router = require("express").Router();
const booksController = require("../controllers/bookController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .delete(booksController.remove);
// .put(booksController.update)

// Matches with "/api/books/:email"
router
  .route("/:email")
  .get(booksController.find(email))
  .delete(booksController.remove);

module.exports = router;