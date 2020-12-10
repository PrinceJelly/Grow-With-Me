exports.up = (knex) => {
  return knex.schema.createTable("savings", (table) => {
    table.increments("id").primary();
    table.string("label").notNullable().defaultTo("Savings");
    table.string("type").notNullable();
    table
      .integer("goals_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("goals")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.decimal("saved", 14, 2).notNullable().defaultTo(0);
    table.timestamp("date").defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("savings");
};
