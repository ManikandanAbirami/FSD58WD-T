const express = require("express");
const router = express.Router();
const Url = require("../models/Url");
const shortid = require("shortid");

router.post("/shorten", async (req, res) => {
  try {
    const { originalUrl } = req.body;
    const shortUrl = shortid.generate();

    let url = new Url({ originalUrl, shortUrl });
    await url.save();

    res.json(url);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.get("/:shortUrl", async (req, res) => {
  try {
    const { shortUrl } = req.params;

    const url = await Url.findOne({ shortUrl });
    if (url) {
      return res.redirect(url.originalUrl);
    } else {
      return res.status(404).json("URL not found");
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
