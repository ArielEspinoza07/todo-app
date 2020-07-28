const knex = require("knex");

exports.up = async (knex) => {
  await knex.schema.createTable("project_tasks", (table) => {
    table.increments("id").notNullable();
    table.integer("project_id").notNullable().unsigned();
    table.integer("task_id").notNullable().unsigned();
    table.timestamps(false, true);

    table.index("id", "project_tasks_id");
    table.index("project_id", "project_tasks_project_id");
    table.index("task_id", "project_tasks_task_id");
    table.index("created_at", "project_tasks_created_at");
    table.index("updated_at", "project_tasks_updated_at");
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("project_tasks");
};
