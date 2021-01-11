const bookshelf = require("../bookshelf");

const Pet = bookshelf.model("Pet", {
  tableName: "Goal",
  goals: function () {
    return this.belongsTo("Goal");
  },
});

module.exports = Pet;
