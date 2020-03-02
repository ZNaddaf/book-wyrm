/* eslint-disable no-console */
const express = require("express");
const { join } = require("path");
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes")

const db = require("./models")

const PORT = process.env.PORT || 3001;

//If server doesn't work uncomment out line 19 and ocmment out 21-23
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactbooks")
  .then(() => console.log("Database is connected"))
  .catch(err => console.log(err));
// app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(morgan("dev"));

// Add routes, both API and view
app.use("/api", routes);
// Connect to the Mongo DB

// db.Book.create({ title: "Great Gatsby",
// author: "gene bill",
// id: 12313 
// })
//   .then(dbBook => {
//     console.log(dbBook);
//   })
//   .catch(({ message }) => {
//     console.log(message)
//   })

// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
