const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {

    res.json({
        status: "ok",
        message: "Success",
        query: req.query
    });
});

router.post("/", (req, res) => {

    res.json({
        status: "ok",
        message: "Success",
        params: req.body
    });
});

router.get("/:id", (req, res) => {

    res.json({
        status: "ok",
        message: "Success",
        params: req.params
    });
});

router.put("/:id", (req, res) => {
    res.json({
        status: "ok",
        message: "Success",
        params: req.body
    });
});

router.delete("/:id", (req, res) => {
    res.json({
        status: "ok",
        message: "Success",
        params: req.params
    });
});

module.exports = router;