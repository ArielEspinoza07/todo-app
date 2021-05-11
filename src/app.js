const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

require("./db");

const corsOptions = require("./cors");

const { errorMiddleware } = require("./middlewares/index");

const api = require("./routes/api/index");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(morgan('combined'));

app.get("/", (req, res) => {
  res.json({
    status: true,
    message: "Success",
    data: [],
  });
});

app.use("/api", api);

app.use(errorMiddleware);

module.exports = app;
