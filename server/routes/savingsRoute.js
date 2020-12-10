const express = require("express");
const router = express.Router();
const savingsController = require("../controllers/savingsController");

/********************GET ALL SAVINGS******************/

router.route("/").get(savingsController.get);

/*******************POST SAVINGS********************/

router.route("/").post(savingsController.post);

/******************GET SAVINGS BY ID****************/

router.route("/:id").get(savingsController.getById);

/******************PATCH SAVINGS*******************/

router.route("/:id").patch(savingsController.patch);

/*****************DELETE SAVINGS******************/

router.route("/:id").delete(savingsController.del);

module.exports = router;
