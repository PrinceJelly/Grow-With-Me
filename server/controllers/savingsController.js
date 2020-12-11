const Savings = require("../models/savingsModel");
const Goals = require("../models/goalsModel");

/* Man savings are spicy :/ */

/********************GET ALL SAVINGS******************/

function get(req, res) {
  Savings.fetchAll({ withRelated: ["goals"] }).then((saved) => {
    res.status(200).json(saved);
  });
}
/*******************POST SAVINGS********************/

function post(req, res) {
  Goals.where({ id: req.body.goalId })
    .fetch()
    .then((goal) => {
      new Savings({
        label: "Savings:",
        goal_id: req.body.goalId,
        saved: req.body.saved,
      })
        .save()
        .then((newSavings) => {
          res.status(201).json({ newSavings });
        });
    })
    .catch((goal) => {
      res
        .status(404)
        .json({ error: "Cannot find goal, please provide a valid ID" });
    });
}
/* It makes sense to me that they are only allowed to changed the amount not the where the saved portion should be, if they make that mistake, then they must delete their post and re-enter the entry*/
/*******************GET SAVINGS BY ID*******************/
function getById(req, res) {
  Savings.where(req.params)
    .fetch({ withRelated: ["goals"] })
    .then((savings) => {
      res.status(200).json({ savings });
    });
}
/******************PATCH SAVINGS*******************/

function patch(req, res) {
  if (req.body.goalsId) {
    Goals.where("id", req.body.goalsId)
      .fetch()
      .then((goal) => console.log("Goal found"))
      .catch((goal) => {
        res
          .status(404)
          .json({ error: "Cannot find goal, please provide a vaild ID" });
      });
  }
  Savings.where("id", req.params.id)
    .fetch()
    .then((savings) => {
      savings
        .save({ body: req.body }, { patch: true })
        .then((updateSavings) => {
          res.status(200).json({ updateSavings });
        });
    });
}

/*****************DELETE SAVINGS******************/
function del(req, res) {
  Savings.where("id", req.params.id)
    .destroy()
    .then((deleteSaved) => {
      res.status(200).json({ deleteSaved });
    });
}

module.exports = { get, post, getById, patch, del };
