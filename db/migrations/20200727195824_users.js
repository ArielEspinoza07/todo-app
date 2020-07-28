const knex= require('knex');

exports.up = async (knex) => {
  await knex.schema.createTable('users', (table) => {
      table.increments("id").notNullable();
      table.string("name");
      table.string("email").notNullable().unique();
      table.string("password").notNullable();
      table.boolean("active").defaultTo(true);
      table.boolean("email_verified").defaultTo(false);
      table.datetime("email_verified_at");
      table.timestamps(false, true);

      table.index("id", "users_id");
      table.index("name", "users_name");
      table.index("email", "users_email");
      table.index("active", "users_active");
      table.index("email_verified", "users_email_verified");
      table.index("email_verified_at", "users_email_verified_at");
      table.index("created_at", "users_created_at");
      table.index("updated_at", "users_updated_at");
  })
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('users');
};
