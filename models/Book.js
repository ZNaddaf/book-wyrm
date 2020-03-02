const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    author: [String],
    year: Number,
    id: Number
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;