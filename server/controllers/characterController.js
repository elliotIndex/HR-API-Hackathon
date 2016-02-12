var Character = require('../models/Character.js');

// Create our necessary controller methods to perform all needed CRUD actions

exports.createOne = function(req, res) {
  var newChar = req.body; // req.body must have all the attributes of a Character
  Character.create(newChar, function(err, character) {
    if (err) { res.json(err); }
    res.json(character);
  })
};

exports.retrieve = function(req, res) {
  Character.find(req.query, function(err, characters) { // data is an array?, query is a query
    if (err) { res.json(err); }
    res.json(characters);
  })
};

exports.delete = function(req, res) {
  Character.find(req.query, function(err, characters) { // data is an array?, query is a query
    if (err) { res.json(err); }
    Character.remove(req.query, function(err) {
      if (err) { res.json(err); }
    })
    res.json(characters);
  })
};


exports.retrieveOne = function(req, res) {
  Character.find(queryToOne(req), function(err, characters) { // data is an array?, query is a query
    if (err) { res.json(err); }
    res.json(characters);
  })
};

exports.deleteOne = function(req, res) {
  Character.find(queryToOne(req), function(err, characters) { // data is an array?, query is a query
    if (err) { res.json(err); }
    Character.remove(queryToOne(req), function(err) {
      if (err) { res.json(err); }
    })
    res.json(characters);
  })
};

var queryToOne = function(req) {
  return { _id: req.params.id };
}