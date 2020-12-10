const express = require("express");
const router = express.Router();
const Expense = require("../models/expenseModel");
//ask about controllers later.. I feel like you are able to seperate these ?

/********************GET ALL EXPENSES******************/
router
  .route("/")
  .get((req, res) => {
    Expense.where(req.query).then((expense) => {
      res.status(200).json(expense);
    });
  })
  /*******************POST EXPENSES********************/
  .post((req, res) => {
    new Expense({
      name: Expense,
      type: req.body.type,
      spent: req.body.spent,
    })
      .save()
      .then((newExpense) => {
        res.status(201).json({ newExpense });
      });
  });
/******************PATCH EXPENSES*******************/
router
  .route("/:id")
  .get((res, res) => {
    Expense.where(req.params).then((expense) => {
      res.status(200).json(expense);
    });
  })
  .patch((req, res) => {
    Expense.where("id", req.params.id)
      .fetch()
      .then((expense) => {
        expense
          .save(if (!req.body))
          .then((updateExpense) => {
            res.status(200).json({ updateExpense });
          });
          .catch(Expense.Error, () => {
              res.json(400, { error: expense + 'PATCH body must contain all required properties' + requiredProperties: ["type, spent"] });
      });
  })
  /*****************DELETE EXPENSES******************/
  .delete((req, res) => {
    Expense.where("id", req.params.id)
      .destroy()
      .then((deletedExpense) => {
        res.status(200).json({ deletedExpense });
      });
  });

  module.exports = router;