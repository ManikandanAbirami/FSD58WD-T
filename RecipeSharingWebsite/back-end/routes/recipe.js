const Recipe = require("../models/Recipe");
const express = require("express");
const router = express.Router();

//Add Recipe
router.post("/recipes", async (req, res) => {
  try {
    const {
      title,
      description,
      ingredients,
      instructions,
      category,
      images,
      videos,
      user,
    } = req.body;
    const newRecipe = new Recipe({
      title,
      description,
      ingredients,
      instructions,
      category,
      images,
      videos,
      user,
    });
    await newRecipe.save();
    res.json({ message: "Recipe added" });
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Get Recipes
router.get("/recipes", async (req, res) => {
  try {
    const recipes = await Recipe.find().populate("user");
    res.json(recipes);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
