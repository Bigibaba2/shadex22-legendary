const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

// Register
router.post('/register', async (req, res) => {
  const { email, password, ninja } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).send("User already exists");
  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashed, ninja });
  await user.save();
  res.status(201).send("Registered");
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).send("Invalid");
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).send("Wrong");
  const token = jwt.sign({ id: user._id, ninja: user.ninja }, SECRET);
  res.json({ token });
});

module.exports = router;
