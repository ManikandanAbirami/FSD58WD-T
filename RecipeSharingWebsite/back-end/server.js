const mongoose = require("mongoose");
const express = require("express");
const authRoutes = require("./routes/auth");
const recipeRoutes = require("./routes/recipe");
const commentRoutes = require("./routes/comments");
const ratingRoutes = require("./routes/ratings");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

//Routes
app.use("/apiAuth", authRoutes);
app.use("/apiRecipe", recipeRoutes);
app.use("/apiComment", commentRoutes);
app.use("/apiRating", ratingRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully!!!");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
      console.log(`cloud_name: ${process.env.CLOUDINARY_CLOUD_NAME},
        api_key: ${process.env.CLOUDINARY_API_KEY},
        api_secret: ${process.env.CLOUDINARY_API_SECRET}`);
    });
  })
  .catch((err) => console.log("Error occurred:", err.message));
