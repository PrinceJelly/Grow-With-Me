exports.up = (knex) => {
  return knex.schema.createTable("goals", (table) => {
    table.increments("id").primary();
    table.string("My Goal").notNullable().defaultTo("My Goal");
    table.string("savings_type").notNullable();
    table.integer("reach_goal").notNullable().defaultTo(20);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("goals");
};
