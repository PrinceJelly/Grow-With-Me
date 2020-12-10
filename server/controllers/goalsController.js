const Goals = require("../models/goalsModel");

/********************GET ALL GOALS******************/

function get(req, res) {
  Goals.where(req.query)
    .fetchAll({ withRelated: ["savings"] })
    .then((goal) => {
      res.status(200).json(goal);
    });
}
/*******************POST GOALS********************/

function post(req, res) {
  new Goals({
    label: "My Goals:",
    type: req.body.type,
    goal: req.body.goal,
  })
    .save({ body: req.body }, { patch: true })
    .then(() => {
      res.status(201).json({ newGoal });
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
    .fetch({ withRelated: ["savings"] })
    .destroy()
    .then((deletedGoals) => {
      res.status(200).json({ deletedGoals });
    });
}
/*It didn't make sense to add a patch after going reviewing it again, the user should might as well delete the goal instead and start anew */
