const Goals = require("../models/goalsModel");

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
  const pets = [
    "https://i.imgur.com/qaX8GEm.png",
    "https://i.imgur.com/w7DNIyk.png",
    "https://i.imgur.com/iv2Bevv.png",
  ];
  const randomPet = pets[Math.floor(Math.random() * pets.length)];

  new Goals({
    myGoal: req.body.myGoal,
    goal: req.body.goal,
    myPet: req.body.myPet,
    goalRemainder: req.body.goal,
    img_url: randomPet,
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
