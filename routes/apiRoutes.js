const apiRouter = require('express').Router();
const tweetController = require('../controllers/tweetController');
const userController = require('../controllers/userController');

//Here is where the ajax calls are made to the database
apiRouter.route('/tweets')
    .get(tweetController.index)
    .post(tweetController.store)

<<<<<<< HEAD
apiRouter.route('/tweets/:id')
    .get(tweetController.getTweetById)


apiRouter.route('/tweets/get/:userId')
    .get(tweetController.getTweetsByUser)

apiRouter.route('/tweets/like/:id')
    .post(tweetController.likesHandler)

=======
>>>>>>> eb20a24fad7708100640890df15c19c2bc65ba55
apiRouter.route('/users')
    .get(userController.index)
    .post(userController.store)

apiRouter.route('/user/isFollowing/:id')
    .post(userController.isFollowing)

apiRouter.route('/user/followHandler/:id')
    .post(userController.followHandler)

module.exports = apiRouter; 