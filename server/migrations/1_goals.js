exports.up = (knex) => {
  return knex.schema.createTable("goals", (table) => {
    table.increments("id").primary();
    table.string("myGoal").notNullable();
    table.decimal("goal", 14, 2).notNullable().defaultTo(20);
    table.decimal("goalRemainder", 14, 2).defaultTo(0);
    table.decimal("savedToDate", 14, 2).defaultTo(0);
    table.string("myPet").notNullable();
    table.string("img_url").notNullable();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("goals");
};
