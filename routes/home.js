const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly! Welcome to Mail-O-Matic. Please try our extension",
  });
});

module.exports = router;