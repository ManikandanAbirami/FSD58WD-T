const express = require("express");
const Rating = require("../models/Ratings");
const authMiddleware = require("../middleware/auth");
const router = express.Router();

//Add rating
router.post("/recipes/:recipeId/ratings", authMiddleware, async (req, res) => {
  const { rating } = req.body;
  const { recipeId } = req.params;
  try {
    const newRating = new Rating({
      user: req.userId,
      recipe: recipeId,
      rating,
    });
    await newRating.save();
    res.json(newRating);
  } catch (error) {
    res.status(500).json({ message: "Error adding rating" });
  }
});

// Get Ratings for Recipe
router.get("/recipes/:recipeId/ratings", async (req, res) => {
  const { recipeId } = req.params;
  try {
    const ratings = await Rating.find({ recipe: recipeId }).populate("user");
    res.json(ratings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching ratings" });
  }
});
module.exports = router;
