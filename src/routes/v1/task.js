const express = require("express");
const router = express.Router();

const { taskController, TaskController} = require("../../controllers/taskController");

router.get("/",TaskController.index);

router.post("/", TaskController.store);

router.get("/:id", TaskController.show);

router.put("/:id", TaskController.update);

router.delete("/:id", TaskController.destroy);

module.exports = router;