const { knex } = require("../bookshelf");
const goalsData = require("../seeds_data/goalsData");
const savingsData = require("../seeds_data/savingsData");

exports.seed = (knex) =>
  knex("goals")
    .then(() => knex("goals").del())
    .then(() => knex("goals").insert(goalsData));
knex("savings")
  .then(() => knex("savings").del())
  .then(() => knex("savings").insert(savingsData));
