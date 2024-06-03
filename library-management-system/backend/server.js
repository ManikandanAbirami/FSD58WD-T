const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("MongoDB connected successfully!!!");
});

const authRoutes = require("./routes/auth");
const bookRoutes = require("./routes/book");

app.use("/api/auth", authRoutes);
app.use("/api/book", bookRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
