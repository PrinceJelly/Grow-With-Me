const { knex } = require("../bookshelf");
const goalsData = require("../seeds_data/goalsData");
const savingsData = require("../seeds_data/savingsData");
const petData = require("../seeds_data/petData");
exports.seed = (knex) =>
  knex("goals")
    .then(() => knex("pets").del())
    .then(() => knex("pets").insert(petData))
    .then(() => knex("goals").del())
    .then(() => knex("goals").insert(goalsData))
    .then(() => knex("savings").del())
    .then(() => knex("savings").insert(savingsData));
