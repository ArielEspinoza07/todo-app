const express = require("express");

require("dotenv").config();

const app = express();


app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Success",
  });
});

module.exports = app;