const { table } = require("console");

exports.up = (knex) => {
  return knex.schema.createTable("expense", (table) => {
    table.increments("id").primary();
    table.string("label").notNullable().defaultTo("Expenses");
    table.string("type").notNullable();
    table.decimal("spent", 14, 2).notNullable().defaultTo(0);
    table.timestamp("date").defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("expense");
};
