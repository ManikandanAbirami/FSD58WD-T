const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.json());
app.use(cors());

//https://myaccount.google.com/apppasswords

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "maniguvi1990@gmail.com",
    pass: "vcjimcrxlfapxxfr",
  },
});

app.post("/send", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "maniguvi1990@gmail.com",
    subject: `Contact Form Submission from ${name}`,
    text: message,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.json({ message: info.response });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
