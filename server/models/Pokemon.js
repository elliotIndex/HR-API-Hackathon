var mongoose = require('mongoose');

// Flesh out our Pokemon schema and register the model with Mongoose

var pokemonSchema = new mongoose.Schema({
  number: Number,
  name: String,
  types: Array,
  imageUrl: String
});

var Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
