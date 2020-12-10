const { table } = require("console");

exports.up = (knex) => {
  return knex.schema.createTable("expense", (table) => {
    table.increments("id").primary();
    table.string("expense").notNullable().defaultTo("expense");
    table.string("expense_type").notNullable();
    table.integer("spent").notNullable().defaultTo(0);
    table.timestamp("date").defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("expense");
};
