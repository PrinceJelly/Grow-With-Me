exports.up = (knex) => {
  return removeForeignKeyChecks()
    .then(createGoalTable)
    .then(createSavingsTable)
    .then(addForeignKeyChecks);

  function removeForeignKeyChecks() {
    return knex.raw("SET foreign_key_checks = 0;");
  }

  function addForeignKeyChecks() {
    return knex.raw("SET foreign_key_checks = 1;");
  }

  function createGoalTable() {
    return knex.schema.createTable("goals", (table) => {
      table.increments("id").primary();
      table.string("myGoal").notNullable();
      table.decimal("goal", 14, 2).notNullable().defaultTo(20);
      table.decimal("goalRemainder", 14, 2).defaultTo(0);
      table.decimal("savedToDate", 14, 2).defaultTo(0);
      table.string("myPet").notNullable();
      table.string("img_url", 250).notNullable();
    });
  }

  function createSavingsTable() {
    return knex.schema.createTable("savings", (table) => {
      table.increments("id").primary();
      table
        .integer("goal_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("goals")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.decimal("saved", 14, 2).notNullable().defaultTo(0);
      table.decimal("savingsUpdate", 14, 2).defaultTo(0);
      table.timestamp("date").defaultTo(knex.fn.now());
    });
  }
};

exports.down = (knex) => {
  return knex.schema.dropTable("goals").dropTable("savings");
};
