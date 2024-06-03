const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const GuviUser = require("../models/Guvi-User");
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new GuviUser({ username, password: hashedPassword, role });
    await user.save();
    res.status(201).send("User registered");
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await GuviUser.findOne({ username });
  if (!user) return res.status(400).send("User not found!");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).send("Invalid password");

  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
    },
    process.env.JWT_SECRET
  );
  res.json({ token });
});

module.exports = router;
