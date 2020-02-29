/* eslint-disable no-console */
const express = require("express");
const { join } = require("path");
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");
// const routes = require("./routes")

const db = require("./models")

const PORT = process.env.PORT || 8080;

app.use(morgan("dev"));
app.use(express.static(join(__dirname, "build")));

app.use((_, res) => {
  res.sendFile(join(__dirname, "build", "index.html"));
});

//If server doesn't work uncomment out line 19 and ocmment out 21-23
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactbooks")
  .then(() => console.log("Database is connected"))
  .catch(err => console.log(err));
// app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

//Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);


// Connect to the Mongo DB

db.Book.create({ title: "Great Gatsby" })
  .then(dbBook => {
    console.log(dbBook);
  })
  .catch(({ message }) => {
    console.log(message)
  })

// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

