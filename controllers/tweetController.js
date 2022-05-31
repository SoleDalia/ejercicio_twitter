const { User, Tweet } = require("../db/connection");

//Trae todos los tweets en forma de JSON
async function index(req, res) {
  try {
    const tweets = await Tweet.find({
    }).sort({ creationdate: -1 }).populate("author");
    res.json(tweets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
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
    res.json(tweet);
  } catch (err) {
    res.json(err);
  }
}

// Trae el Tweet que solicitamos para editar en forma de JSON
async function getTweetById(req, res) {
  const { id } = req.params;
  const tweet = await Tweet.findById(id);
  res.json(tweet);
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const { id } = req.params;
  const tweet = await Tweet.findByIdAndDelete(id);
  res.json(tweet);
}

async function addLike(req, res) {
  const { id } = req.params;
  const tweet = await Tweet.findById(id);
  const user = await User.findById(req.user._id);
  tweet.likes.push(user);
  tweet.save();
  res.json(tweet);
}

async function removeLike(req, res) {
  const { id } = req.params;
  const tweet = await Tweet.findById(id);
  const user = await User.findById(req.user._id);
  tweet.likes.pull(user);
  tweet.save();
  res.json(tweet);
}

// Otros handlers...
// ...

module.exports = {
  index,
  store,
  getTweetById,
  destroy,
  addLike,
  removeLike,
};
