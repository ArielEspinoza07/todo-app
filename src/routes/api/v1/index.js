const express = require("express");
const router = express.Router();

const tasks = require("./task.route");

router.use("/tasks", tasks);

module.exports = router;