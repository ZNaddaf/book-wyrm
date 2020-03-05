const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    console.log(req.query)
    db.Book.find(req.query)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  // findById: function (req, res) {
  //   db.Book.findById(req.params.id)
  //     .then(dbBook => res.json(dbBook))
  //     .catch(err => res.status(422).json(err));
  // },
  find: function (req, res) {
    db.Book.find({ email: req.params.email })
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(req.body);
    db.Book.create(req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },

  remove: function (req, res) {
    console.log("bam")
    db.Book.find({ _id: req.params.id })
      .remove({ _id: req.params.id })
      // .then(dbBook => {
      //   console.log(dbBook);
      //   dbBook.remove()
      // })
      // .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  }
}