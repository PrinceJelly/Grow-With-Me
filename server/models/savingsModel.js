const bookshelf = require("../bookshelf");

const Expense = bookshelf.model("Savings", {
  tableName: "savings",
  goals() {
    return this.hasMany("goals");
  },
});

module.exports = Savings;

//ask about this later not sure if I made this model right
