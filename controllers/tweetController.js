const { User, Tweet } = require("../db/connection");

//Trae todos los tweets en forma de JSON
async function index(req, res) {
  try {
    const loggedUser = await User.findById(req.user._id);
    const following = loggedUser.following;

    const tweets = await Tweet.find({
      $or: [
        { author: loggedUser._id },
        { author: { $in: following } }
      ]
    }).sort({ creationdate: -1 }).populate('author');

    res.json({
      tweets,
      user: req.user._id
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


//Obten los tweets de un usuario
async function getTweetsByUser(req, res) {
  const { userId } = req.params;
  const tweets = await Tweet.find({ author: userId }).sort({ creationdate: -1 }).populate('author');
  res.json(tweets);
}

// Guarda el nuevo tweet en la base
async function store(req, res) {
  try {
    const { text } = req.body;
    const user = await User.findById(req.user._id);
    const tweet = new Tweet({
      text,
      author: user._id,
      creationdate: new Date(),
    });
    await tweet.save();
    const savedTweet = await Tweet.findById(tweet._id).populate('author');
    res.json(savedTweet);
  } catch (err) {
    res.json(err);
  }
}

// Trae el Tweet que solicitamos para editar en forma de JSON
async function getTweetById(req, res) {
  const { id } = req.params;
  try {
    const tweet = await Tweet.findById(id);
    res.json(tweet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const { id } = req.params;
  const tweet = await Tweet.findByIdAndDelete(id);
  res.json(tweet);
}

async function likesHandler(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findById(req.user._id);
    const tweet = await Tweet.findById(id);

    //Si el usuario ya le dió like al tweet, lo saca
    if (tweet.likes.includes(user._id)) {
      tweet.likes.pull(user._id);
      tweet.save();
      res.json({ tweet, liked: false });
    } else {
      tweet.likes.push(user._id);
      tweet.save();
      res.json({ tweet, liked: true });
    }
  } catch (error) {
    res.json(error);
  }
}

// Otros handlers...
// ...

module.exports = {
  index,
  store,
  getTweetById,
  likesHandler,
  getTweetsByUser,
  destroy,
};
