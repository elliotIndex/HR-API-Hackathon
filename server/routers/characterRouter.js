var characterRouter = require('express').Router();
var characterController = require('../controllers/characterController.js');

// Declare routes for our resource endpoints and specify what controller method we're going to use for each
characterRouter.route('/')
  .post(characterController.createOne)
  .get(characterController.retrieve)
  .delete(characterController.delete);

characterRouter.route('/:id')
  // .put(characterController.updateOne)
  .get(characterController.retrieveOne)
  .delete(characterController.deleteOne);

module.exports = characterRouter;