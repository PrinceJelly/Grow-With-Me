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

async function post(req, res) {
  //get goal
  const currentGoal = await Goals.where({ id: req.body.goalId })
    .fetch({ columns: ["goal", "goalRemainder", "savedToDate"] })
    .then((goal) => {
      return goal.attributes;
    });
  //In the future, to access data from another dataset/table, add in .attributes
  const newSavings = {
    goal_id: req.body.goalId,
    saved: req.body.saved,
    savingsUpdate: currentGoal.goal - req.body.saved,
    date: req.body.date,
  };

  const goal = await new Goals({ id: req.body.goalId })
    .save(
      {
        goalRemainder: currentGoal.goalRemainder - req.body.saved,
        savedToDate: +currentGoal.savedToDate + +req.body.saved,
      },
      {
        patch: true,
      }
    )
    .then((goal) => goal)
    .catch((error) => {
      res.status(404).json({ error });
    });

  new Savings(newSavings)
    .save()
    .then((saving) => {
      res.status(201).json({ goal: goal, savings: saving });
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
}
///before or after the arrow function would be my question? I understand that I must create a callback at some point in order for me to run the function of new Goal, although in this case, goal isn't a function... therefore?

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
    Goals.where({ id: req.body.goalId })
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
