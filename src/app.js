const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

require("dotenv").config();

require('./exceptions/index');

const corsOptions = require('./cors');

const {errorMiddleware,loggerMiddleware} = require("./middlewares/index");

const v1 = require("./routes/api/v1/index");

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(errorMiddleware);
app.use(loggerMiddleware);

app.get("/", (req, res) => {

    res.json({
        status: true,
        message: "Success",
        data: [],
    });
});

app.use("/api/v1", v1);

module.exports = app;