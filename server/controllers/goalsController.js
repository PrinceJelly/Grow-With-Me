const Goals = require("../models/goalsModel");
const Savings = require("../models/savingsModel");
/********************GET ALL GOALS******************/

function get(req, res) {
  // res.send("hello");
  Goals.where({})
    .fetchAll({ withRelated: ["savings"] })
    .then((goal) => {
      res.status(200).json(goal);
    });
}
/*******************POST GOALS********************/

function post(req, res) {
  new Goals({
    label: "My Goals:",
    myGoal: req.body.myGoal || "",
    goal: req.body.goal,
  })
    .save()
    .then((newGoals) => {
      res.status(201).json({ newGoals });
    })
    .catch((err) => console.error(err));
}
/*******************GET BY GOAL ID ****************/

function getById(req, res) {
  Goals.where("id", req.params.id)
    .fetch({ withRelated: ["savings"] })
    .then((goal) => {
      res.status(200).json(goal);
    });
}

/*****************DELETE GOALS******************/

function del(req, res) {
  Goals.where("id", req.params.id)
    .destroy()
    .then((deletedGoals) => {
      res.status(200).json({ deletedGoals });
    });
}
/*It didn't make sense to add a patch after going reviewing it again, the user should might as well delete the goal instead and start anew */

module.exports = { get, post, getById, del };
