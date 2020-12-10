exports.up = (knex) => {
  return knex.schema.createTable("savings", (table) => {
    table.increments("id").primary();
    table.string("savings").notNullable().defaultTo("savings");
    table.string("savings_type").notNullable();
    table
      .integer("goals_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("goals")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.integer("saved").notNullable().defaultTo(0);
    table.timestamp("date").defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("savings");
};
