const expenseData = require("../seeds/expenseSeed");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("expense")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("expense").insert(expenseData);
    })
    .then(() => {
      // Inserts seed entries
      return knex("expense")
        .pluck("id")
        .then((expenseIds) => {
          return expenseIds;
        });
    });
};
