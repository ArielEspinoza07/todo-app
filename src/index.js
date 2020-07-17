const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

require('dotenv').config();

app.get('/', (req, res) => {
    res.json({
      message: "Esto no es backend",
    });
});

app.listen(port, () => {
    console.log("Listening port: " + port);
});