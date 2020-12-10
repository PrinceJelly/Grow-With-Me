"use strict";
const knex = require("knex")(require("./knexfile"));
knex.debug(true);
const bookshelf = require("bookshelf")(knex);
bookshelf.plugin("registry");
module.exports = bookshelf;
