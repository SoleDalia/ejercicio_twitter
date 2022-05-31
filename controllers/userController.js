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

// Display the specified resource.
async function show(req, res) { }

// Show the form for creating a new resource
async function create(req, res) { }

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
async function edit(req, res) { }

// Update the specified resource in storage.
async function update(req, res) { }

// Remove the specified resource from storage.
async function destroy(req, res) { }

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
