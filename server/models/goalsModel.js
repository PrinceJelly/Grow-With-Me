const bookshelf = require("../bookshelf");

const Expense = bookshelf.model("Goals", {
  tableName: "goal",
  savings: function () {
    return this.hasMany("Savings");
  },
});

module.exports = Goals;
