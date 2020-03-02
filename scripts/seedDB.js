const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactbooks"
);

const bookSeed = [
  {
    title: "The Dead Zone",
    author: "Stephen King",
  },
  {
    title: "Lord of the Flies",
    author: "William Golding",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
  },
  {
    title: "The Punch Escrow",
    author: "Tal M. Klein",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
  },
  {
    title: "Coraline",
    author: "Neil Gaiman",
  },
  {
    title: "Code: The Hidden Language of Computer Hardware and Software",
    author: "Charles Petzold",
  },
  {
    title: "The Everything Store: Jeff Bezos and the Age of Amazon",
    author: "Brad Stone",
  },
  {
    title: "Total Recall: My Unbelievably True Life Story",
    author: "Arnold Schwarzenegger",
  },
  {
    title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
    author: "Ashlee Vance",
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
  },
  {
    title: "Astrophysics for People in a Hurry",
    author: "Neil deGrasse Tyson",
  },
  {
    title: "1984",
    author: "George Orwell",
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  },
  {
    title: "Born a Crime: Stories from a South African Childhood",
    author: "Trevor Noah",
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
