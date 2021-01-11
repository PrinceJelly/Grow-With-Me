const bookshelf = require("../bookshelf");

const Goal = bookshelf.model("Goal", {
  tableName: "goals",
  savings: function () {
    return this.hasMany("Saving");
  },
  pets: function () {
    return this.hasMany("Pet");
  },
});

module.exports = Goal;
