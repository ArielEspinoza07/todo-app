const TaskController = {
  index(req, res) {
    res.json({
      status: "ok",
      message: "Success",
      query: req.query,
    });
  },

  store(req, res) {
    res.json({
      status: "ok",
      message: "Success",
      body: req.body,
    });
  },

  show(req, res) {
    res.json({
      status: "ok",
      message: "Success",
      params: req.params,
    });
  },

  update(req, res) {
     res.json({
       status: "ok",
       message: "Success",
       body: req.body,
       params: req.params,
     });
  },

  destroy(req, res) {
     res.json({
       status: "ok",
       message: "Success",
       params: req.params,
     });
  },
};

module.exports.TaskController = TaskController;