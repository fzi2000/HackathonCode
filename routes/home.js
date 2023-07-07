const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "\x1b[34mExpress Testing\x1b[0m", // Blue color
    message: "\x1b[32mThe app is working properly! Welcome to Mail-O-Matic. Please try our extension\x1b[0m" // Green color
  
    // title: "Express Testing",
    // message: "The app is working properly! Welcome to Mail-O-Matic. Please try our extension",
  });
  return res.status(200).json(response);
});

module.exports = router;