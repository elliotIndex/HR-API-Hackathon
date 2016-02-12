var mongoose = require('mongoose');

// Flesh out our Character schema and register the model with Mongoose

var characterSchema = new mongoose.Schema({
  name: String,
  nickname: String,
  house: String,
  imageUrl: String
});

var Character = mongoose.model('Character', characterSchema);

module.exports = Character;
