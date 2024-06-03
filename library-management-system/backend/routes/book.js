const express = require("express");
const Book = require("../models/Guvi-Book");
const { auth, verifyRole } = require("../middleware/auth");
const router = express.Router();

router.post("/", auth, verifyRole(["Admin", "Editor"]), async (req, res) => {
  const { title, author, description } = req.body;
  const book = new Book({ title, author, description });
  await book.save();
  res.status(201).send("Book added");
});

module.exports = router;
