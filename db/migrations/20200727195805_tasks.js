const knex = require("knex");

exports.up = async (knex) => {
  await knex.schema.createTable("tasks", (table) => {
    table.increments("id").notNullable();
    table.string("title").notNullable();
    table.text("description");
    table.string("status").defaultTo("created");
    table.integer("user_id").notNullable().unsigned();
    table.integer("assign_id").unsigned();
    table.timestamps(false, true);

    table.index("id", "tasks_id");
    table.index("title", "tasks_title");
    table.index("status", "tasks_status");
    table.index("user_id", "tasks_user_id");
    table.index("assign_id", "tasks_assign_id");
    table.index("created_at", "tasks_created_at");
    table.index("updated_at", "tasks_updated_at");
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("tasks");
};
