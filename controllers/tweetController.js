const { User, Tweet } = require("../db/connection");

//Get all the tweets
async function index(req, res) {
  try {
    const tweets = await Tweet.find({
    }).sort({ creationdate: -1 }).populate("author");
    res.json(tweets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
// Store a newly created resource in storage.
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

// Show the form for editing the specified resource.
async function edit(req, res) {
  const { id } = req.params;
  const tweet = await Tweet.findById(id);
  res.json(tweet);
}

// Update the specified resource in storage.
async function update(req, res) {
  const { body } = req;
  const { id } = req.params;
  const tweet = await Tweet.findByIdAndUpdate(id, body);
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
  edit,
  update,
  destroy,
  addLike,
  removeLike
};
