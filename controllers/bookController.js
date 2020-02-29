const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Book.find(req.query)
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Book.findById(req.params.id)
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422).json(err));
    },
    create: function (rec, res) {
        db.Book.create()
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Book.findById(req.params.id)
            .then(dbBook => dbBook.remove())
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422).json(err));
    }
}