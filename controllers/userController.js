const { User } = require("../db/connection");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const users = await User.find({})
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Store a newly created resource in storage.
async function store(req, res) {
  const newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.json(error);
  }
}

// Show the form for editing the specified resource.
async function editUserProfile(req, res) {
  const { firstname, lastname, description, photo } = req.body;
  try {
    await User.findByIdAndUpdate(req.user._id, {
      firstname,
      lastname,
      description,
      photo,
    });
    res.redirect("/user/" + req.user._id);
  } catch (error) {
    console.log(error);
    res.redirect("/user/" + req.user._id);
  }
}

async function isFollowing(req, res) {
  const { id } = req.params;
  try {
    const loggedUser = await User.findById(req.user._id);
    following = loggedUser.following.includes(id)
    res.json(following);
  } catch (error) {
    res.json(error);
  }
}

async function followHandler(req, res) {
  const { id } = req.params;
  try {
    const loggedUser = await User.findById(req.user._id);
    const otherUser = await User.findById(id);
    let isFollowing = loggedUser.following.includes(id)
    if (isFollowing) {
      // Unfollow
      loggedUser.following.pull(id);
      otherUser.followers.pull(req.user._id);
      isFollowing = false;
    } else {
      // Follow
      loggedUser.following.push(id);
      otherUser.followers.push(req.user._id);
      isFollowing = true;
    }
    await loggedUser.save();
    await otherUser.save();
    res.json({ isFollowing });
  } catch (error) {
    res.json(error);
  }
}



// Otros handlers...
// ...

module.exports = {
  index,
  store,
  editUserProfile,
  isFollowing,
  followHandler,
};
