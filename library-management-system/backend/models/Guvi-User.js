const mongoose = require("mongoose");

const guviUserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["Admin", "Editor", "Viewer"],
    default: "Viewer",
  },
});

const GuviUser = mongoose.model("GuviUser", guviUserSchema);
module.exports = GuviUser;
