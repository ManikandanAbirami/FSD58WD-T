const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/name", (req, res) => {
  res.json(displayName("Manikandan", "Anbalagan"));
});

const displayName = (firstName, lastName) => {
  return `Hey, ${firstName} ${lastName}!!!!`;
};

// console.log(displayName("Manikandan", "Anbalagan"));
