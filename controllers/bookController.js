const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        console.log(req.query)
        db.Book.find(req.query)
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Book.findById(req.params.id)
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log(req.body);
        db.Book.create(req.body)
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Book.findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}