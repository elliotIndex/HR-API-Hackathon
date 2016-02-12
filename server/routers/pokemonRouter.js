var pokemonRouter = require('express').Router();
var pokemonController = require('../controllers/pokemonController.js');

// Declare routes for our resource endpoints and specify what controller method we're going to use for each
pokemonRouter.route('/')
  .post(pokemonController.createOne)
  .get(pokemonController.retrieve);
  // .delete(pokemonController.delete)
module.exports = pokemonRouter;
