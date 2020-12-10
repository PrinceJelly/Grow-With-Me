const bookshelf = require("../bookshelf");

const Expense = bookshelf.model("Goals", {
  tableName: "goal",
});

module.exports = Goals;
