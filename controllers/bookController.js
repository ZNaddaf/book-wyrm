const db = require("../models");
import { useAuth0 } from "../react-auth0-spa";


module.exports = {
    findAll: function (req, res) {
        const { user } = useAuth0();
        console.log(req.query)
        console.log({ user.email })
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

    remove: function (req, res) {
        console.log("bam")
        db.Book.findById({ _id: req.params.id })
            .then(dbBook => dbBook.remove())
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422).json(err));
    }
}