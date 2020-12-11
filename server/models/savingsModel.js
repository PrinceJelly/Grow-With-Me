const bookshelf = require("../bookshelf");

const Saving = bookshelf.model("Saving", {
  tableName: "savings",
  goals: function () {
    return this.belongsTo("Goal");
  },
});

module.exports = Saving;

//ask about this later not sure if I made this model right
