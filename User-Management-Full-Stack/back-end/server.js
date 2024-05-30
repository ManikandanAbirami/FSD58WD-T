const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

//Routes
app.use("/apiUser", userRoutes);

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Conection error", error.message);
  });

app.get("/name", (req, res) => {
  res.json(displayName("Manikandan", "Anbalagan"));
});

const displayName = (firstName, lastName) => {
  return `Hey, ${firstName} ${lastName}!!!!`;
};

// console.log(displayName("Manikandan", "Anbalagan"));
