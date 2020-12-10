const express = require("express");
const router = express.Router();
const goalController = require("../controllers/goalsController");

/********************GET ALL GOALS******************/

router.route("/").get(goalController.get);

/*******************POST GOALS********************/

router.route("/").post(goalController.post);

/******************GET GOAL BY ID*******************/

router.route("/:id").get(goalController.getById);

/*****************DELETE GOALS******************/

router.route("/:id").delete(goalController.del);

module.exports = router;
