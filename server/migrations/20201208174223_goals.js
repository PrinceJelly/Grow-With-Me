exports.up = (knex) => {
  return knex.schema.createTable("goals", (table) => {
    table.increments("id").primary();
    table.string("label").notNullable().defaultTo("My Goal");
    table.string("type").notNullable();
    table.decimal("goal", 14, 2).notNullable().defaultTo(20);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("goals");
};
