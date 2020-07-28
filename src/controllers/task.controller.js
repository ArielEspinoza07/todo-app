const Task = require("../models/task.model");
const { NotFoundError } = require("../exceptions/index");

const TaskController = {
  async index(req, res, next) {
    try {
      const users = await Task.query().orderBy("created_at");

      res.json({
        status: "ok",
        message: "Success",
        data: users,
      });
    } catch (error) {
      next(error);
    }
  },

  async store(req, res, next) {
    try {
      const user = await Task.query().insert(req.body);

      res.json({
        status: "ok",
        message: "Success",
        data: user,
      });
    } catch (error) {
      next(error);
    }
  },

  async show(req, res, next) {
    try {
      const user = await Task.query().findById(req.params.id).throwIfNotFound();

      res.json({
        status: "ok",
        message: "Success",
        data: user || [],
      });
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      await Task.query()
        .findById(req.params.id)
        .throwIfNotFound()
        .patch(req.body);
      const user = await Task.query().findById(req.params.id);

      res.json({
        status: "ok",
        message: "Success",
        data: user,
      });
    } catch (error) {
      next(error);
    }
  },

  async destroy(req, res, next) {
    try {
      const user = await Task.query().findById(req.params.id).throwIfNotFound();
      await Task.query().deleteById(req.params.id);

      res.json({
        status: "ok",
        message: "Success",
        data: user,
      });
    } catch (error) {
      next(error);
    }
  },
};

module.exports.TaskController = TaskController;
