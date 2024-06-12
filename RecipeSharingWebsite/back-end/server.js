const mongoose = require("mongoose");
const express = require("express");
const authRoutes = require("./routes/auth");
const recipeRoutes = require("./routes/recipe");
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

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully!!!");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log("Error occurred:", err.message));
