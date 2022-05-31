const apiRouter = require('express').Router();
const tweetController = require('../controllers/tweetController');
const userController = require('../controllers/userController');

//Here is where the ajax calls are made to the database
apiRouter.route('/tweets')
    .get(tweetController.index)
    .post(tweetController.store)

apiRouter.route('/users')
    .get(userController.index)
    .post(userController.store)

module.exports = apiRouter; 