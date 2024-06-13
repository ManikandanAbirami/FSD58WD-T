const express = require("express");
const Comment = require("../models/Comment");
const authMiddleware = require("../middleware/auth");
const router = express.Router();

// Add comment
router.post("/recipes/:recipeId/comments", authMiddleware, async (req, res) => {
  const { content } = req.body;
  const { recipeId } = req.params;
  try {
    const comment = new Comment({
      user: req.userId,
      recipe: recipeId,
      content,
    });
    await comment.save();
    res.json(comment);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Error adding comment" });
  }
});

// Get comments for Recipe
router.get("/recipes/:recipeId/comments", async (req, res) => {
  const { recipeId } = req.params;
  try {
    const comments = await Comment.find({ recipe: recipeId }).populate("user");
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching comments" });
  }
});

module.exports = router;
