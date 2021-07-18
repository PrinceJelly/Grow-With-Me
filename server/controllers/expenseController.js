const Expense = require("../models/expenseModel");

/****************GET ALL EXPENSES*********************/

function get(req, res) {
  console.log(req);
  Expense.fetchAll().then((expense) => {
    res.status(200).json(expense);
  });
}

/*******************POST EXPENSES*********************/

function post(req, res) {
  new Expense({
    type: req.body.type,
    spent: req.body.spent,
    date: req.body.date,
  })
    .save()
    .then((newExpense) => {
      res.status(201).json({ newExpense });
    })
    .catch((err) => console.error(err));
}
/*******************GET BY EXPENSE ID ****************/

function getById(req, res) {
  Expense.where("id", req.params.id).then((expense) => {
    res.status(200).json(expense);
  });
}
/******************PATCH EXPENSES********************/

function patch(req, res) {
  Expense.where("id", req.params.id)
    .fetch()
    .then((expense) => {
      expense
        .save({ body: req.body }, { patch: true })
        .then((updatedExpense) => {
          res.status(200).json({ updatedExpense });
        });
    });
}
/****************DELETE EXPENSES********************/

function del(req, res) {
  Expense.where("id", req.params.id)
    .destroy()
    .then((deleteExpense) => {
      res.status(200).json({ deletedExpense });
    });
}

module.exports = { get, post, getById, patch, del };
