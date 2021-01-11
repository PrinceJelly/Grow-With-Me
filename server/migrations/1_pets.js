exports.up = (knex) => {
  return knex.schema.createTable("pets", (table) => {
    table.increments("id").primary();
    table.string("petType").notNullable();
    table
      .binary("img_url", 250)
      .notNullable()
      .defaultTo("https://imgur.com/qaX8GEm");
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("pets");
};
