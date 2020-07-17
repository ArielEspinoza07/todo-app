const express = require("express");

require("dotenv").config();

const app = express();


app.get("/", (req, res) => {
  res.json({
    message: "Esto no es backend",
  });
});

module.exports = app;