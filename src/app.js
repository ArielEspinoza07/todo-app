const express = require("express");

const {logger} = require("./middlewares/index");

const {taskRoutes} = require("./routes/v1/index");

require("dotenv").config();

const app = express();

app.use(express.json())

app.use(logger);

app.get("/", (req, res) => {

    res.json({
        status: true,
        message: "Success",
        data: [],
    });
});

app.use('/api/v1/task', taskRoutes);

module.exports = app;