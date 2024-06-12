const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    recipe: { type: mongoose.Schema.Types.ObjectId, ref: "Recipe" },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
