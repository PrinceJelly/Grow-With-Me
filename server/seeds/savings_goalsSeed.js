const goalsData = require("../seeds_data/goalsData");
const savingsData = require("../seeds_data/savingsData");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("goals")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("goals").insert(goalsData);
    })
    .then(() => {
      return knex("savings").del();
    })
    .then(() => {
      // Inserts seed entries
      return knex("goals")
        .pluck("id")
        .then((goalsId) => {
          return goalsId;
        });
    })
    .then((goalsId) => {
      const savingsDataWithGoalsIds = savingsData.map((savings) => {
        savings.goals_id = goalsId[Math.floor(Math.random() * goalsId.length)];
        return savings;
      });
      return knex("savings").insert(savingsDataWithGoalsIds);
    });
};
