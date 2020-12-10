const express = require("express");
const router = express.Router();
const Goals = require("../models/goalsModel");
//ask about controllers later.. I feel like you are able to seperate these ?

/********************GET ALL GOALS******************/
router
  .route("/")
  .get((req, res) => {
    Goals.where(req.query).then((goal) => {
      res.status(200).json(goal);
    });
  })
  /*******************POST GOALS********************/
  .post((req, res) => {
    new Goals({
      name: My Goal:,
      type: req.body.type,
      goal: req.body.goal,
    })
      .save()
      .then((newGoal) => {
        res.status(201).json({ newGoal });
      });
  });
/******************PATCH GOALS*******************/
router
  .route("/:id")
  .get((res, res) => {
    Goals.where(req.params)
      .fetch({ withRelated: ["savings"] })
      .then((goal) => {
      res.status(200).json(goal);
    });
  })
  .patch((req, res) => {
    Goals.where("id", req.params.id)
      .fetch()
      .then((goal) => {
        goal
          .save(if (!req.body))
          .then((updateGoal) => {
            res.status(200).json({ updateGoal });
          });
          .catch(Goals.Error, () => {
              res.json(400, { error: Goal + 'PATCH body must contain all required properties' + requiredProperties: ["type, goal"] });
      });
  })
  /*****************DELETE GOALS******************/
  .delete((req, res) => {
    Goals.where("id", req.params.id)
      .destroy()
      .then((deletedGoal) => {
        res.status(200).json({ deletedGoal });
      });
  });

  module.exports = router;