const mongoose = require("mongoose");
const ratingsSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    recipe: { type: mongoose.Schema.Types.ObjectId, ref: "Recipe" },
    rating: { type: Number, required: true, min: 1, max: 5 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ratings", ratingsSchema);
