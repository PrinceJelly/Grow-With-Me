const bookshelf = require("../bookshelf");

const Expense = bookshelf.model("Expense", {
  tableName: "expense",
});

module.exports = Expense;
