const mongoose = require("mongoose");
const recipeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: [String],
    instructions: String,
    category: String,
    images: [String],
    videos: [String],
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    ratings: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: "User" } }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipe", recipeSchema);
