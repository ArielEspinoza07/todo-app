const { Model } = require("objection");

const taskSchema = require('../schemas/task.schema');

class Task extends Model {
  static get tableName() {
    return "tasks";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
      return taskSchema;
  }
}

module.exports = Task;
