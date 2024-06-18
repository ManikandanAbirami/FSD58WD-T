const Recipe = require("../models/Recipe");
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const checkRole = require("../middleware/role");
const cloudinary = require("../config/cloudinary");
const multer = require("multer");

require("dotenv").config();

// Multer configuration
const storage = multer.memoryStorage();
const upload = multer({ storage });

//Add Recipe
router.post(
  "/recipes",
  authMiddleware,
  checkRole(["admin"]),
  upload.array("media"),
  async (req, res) => {
    const { title, description, ingredients, instructions, category } =
      req.body;
    try {
      // Upload media files to Cloudinary
      const mediaUrls = await Promise.all(
        req.files.map(async (file) => {
          return new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
              {
                resource_type: "auto",
              },
              (error, result) => {
                if (error) return reject(error);
                resolve(result.secure_url);
              }
            );
            uploadStream.end(file.buffer);
          });
        })
      );
      const newRecipe = new Recipe({
        title,
        description,
        ingredients: ingredients.split(","),
        instructions,
        category,
        images: mediaUrls.filter(
          (url) => url.endsWith(".jpg") || url.endsWith(".png")
        ),
        videos: mediaUrls.filter(
          (url) => url.endsWith(".mp4") || url.endsWith(".mov")
        ),
        user: req.userId,
      });
      await newRecipe.save();
      res.json({ message: "Recipe added" });
    } catch (error) {
      res.json({ message: error.message });
    }
  }
);

// Get Recipes
router.get("/recipes", async (req, res) => {
  try {
    const recipes = await Recipe.find().populate("user");
    res.json(recipes);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Get Recipe by ID
router.get("/recipes/:recipeId", async (req, res) => {
  const { recipeId } = req.params;
  try {
    const recipe = await Recipe.findById(recipeId).populate("user");
    res.json(recipe);
  } catch (error) {
    res.json({ message: error.message });
  }
});

//Update Recipe
router.put(
  "/recipes/:recipeId",
  authMiddleware,
  checkRole(["admin"]),
  async (req, res) => {
    const { recipeId } = req.params;
    const updates = req.body;
    try {
      await Recipe.findByIdAndUpdate(recipeId, updates);
      res.json({ message: "Recipe updated" });
    } catch (error) {
      res.status(500).json({ message: "Error updating recipe" });
    }
  }
);

//Delete Recipe
router.delete(
  "/recipes/:recipeId",
  authMiddleware,
  checkRole(["admin"]),
  async (req, res) => {
    const { recipeId } = req.params;
    try {
      await Recipe.findByIdAndDelete(recipeId);
      res.json({ message: "Recipe deleted" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting recipe" });
    }
  }
);

module.exports = router;
