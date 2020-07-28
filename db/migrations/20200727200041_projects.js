const knex = require("knex");

exports.up = async (knex) => {
  await knex.schema.createTable("projects", (table) => {
    table.increments("id").notNullable();
    table.string("name").notNullable();
    table.text("description");
    table.string("status").defaultTo("created");
    table.integer("user_id").notNullable().unsigned();
    table.timestamps(false, true);

    table.index("id", "projects_id");
    table.index("name", "projects_name");
    table.index("status", "projects_status");
    table.index("user_id", "projects_user_id");
    table.index("created_at", "projects_created_at");
    table.index("updated_at", "projects_updated_at");
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("projects");
};
