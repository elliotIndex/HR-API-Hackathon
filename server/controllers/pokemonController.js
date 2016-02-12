var Pokemon = require('../models/Pokemon.js');

// Create our necessary controller methods to perform all needed CRUD actions

exports.createOne = function(req, res) {
  var newChar = req.body; // req.body must have all the attributes of a Pokemon
  Pokemon.create(newChar, function(err, pokemon) {
    if (err) { res.json(err); }
    res.json(pokemon);
  })
};

exports.retrieve = function(req, res) {
  Pokemon.find(req.query, function(err, pokemons) { // data is an array?, query is a query
    if (err) { res.json(err); }
    res.json(pokemons);
  })
};
