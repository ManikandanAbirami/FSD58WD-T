const express = require("express");
const mongooes = require("mongoose");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost:27017/urlShortener");

app.use(express.json());
app.use(cors());

const urlRoute = require("./routes/url");
app.use("/api/url", urlRoute);

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
