const { json } = require("express");
const goalsData = require("../seeds_data/goalsData");
const savingsData = require("../seeds_data/savingsData");

exports.seed = (knex) => {
  return knex("goals")
    .then(() => knex("goals").del())
    .then(() => knex("goals").insert(goalsData))
    .then(() => knex("savings").del())
    .then(() => knex("savings").insert(savingsData));
};
