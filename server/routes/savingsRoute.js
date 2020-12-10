const express = require("express");
const router = express.Router();
const Savings = require("../models/savingsModel");
const Goals = require("../models/goalsModel");
//ask about controllers later.. I feel like you are able to seperate these ?
//go back to this later see if expense is working
/********************GET ALL SAVINGS******************/
router
  .route("/")
  .get((req, res) => {
    Savings.where(req.query)
      .fetchAll({ withRelated: ["goals"] })
      .then((saved) => {
        res.status(200).json({ saved });
    });
  })
  /*******************POST SAVINGS********************/
  .post((req, res) => {
    Goals.where("id", req.body.goalsId)
      .fetch()
      .then(goals => console.log("Goal Found"))
      .catch(goals => {
        res.status(404).json({ error: "Please provid valid goal id" });
    })
    new Savings({
      goal_id: req.body.goalId,
      name: Savings,
      type: req.body.type,
      saved: req.body.saved,
    })
      .save()
      .then((newSavings) => {
        res.status(201).json({ newSavings });
      });
  });
/******************PATCH SAVINGS*******************/
router
  .route("/:id")
  .get((res, res) => {
    Savings.where(req.params)
      .fetch({ withRelated: ["goals"]})
      .then((saved) => {
        res.status(200).json({ saved });
    });
  })
  .patch((req, res) => {
    if (req.body.goalId) {
    Goals.where("id", req.body.goalsId)
      .fetch()
      .then(goals => console.log("Goal Found"))
      .catch(goals => {
        res.status(404).json({ error: "Please provid valid goal id" });
    })
    }
    Savings.where("id", req.params.id)
      .fetch()
      .then((saved) => {
        saved
          .save(if (!req.body))
          .then((updateSave) => {
            res.status(200).json({ updateSave });
          });
          .catch(Savings.Error, () => {
              res.json(400, { error: Savings + 'PATCH body must contain all required properties' + requiredProperties: ["type, spent"] });
      });
  })
  /*****************DELETE SAVINGS******************/
  .delete((req, res) => {
    Savings.where("id", req.params.id)
      .destroy()
      .then((deletedSavings) => {
        res.status(200).json({ deletedSavings });
      });
});
  

module.exports = router;