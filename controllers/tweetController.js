const { User } = require("../db/connection");

// Store a newly created resource in storage.
async function store(req, res) {
  const { text } = req.body;
  const user = await User.findById(req.user._id);
  const tweet = await user.tweets.create({ text });
  res.json(tweet);
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
  store,
  edit,
  update,
  destroy,
  addLike,
  removeLike
};
