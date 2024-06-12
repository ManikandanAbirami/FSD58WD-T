const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  try {
    console.log("req.body", req.body);
    const { username, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashPassword });
    await newUser.save();
    res.json({ message: "User registered" });
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    console.log("req.body", req.body);
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
