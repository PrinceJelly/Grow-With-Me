const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expenseController");

/********************GET ALL EXPENSES******************/
router.route("/").get(expenseController.get);

/*******************POST EXPENSES********************/
router.route("/").post(expenseController.post);

/*******************GET BY EXPENSE ID ****************/
router.route("/:id").get(expenseController.getById);

/******************PATCH EXPENSES*******************/
router.route("/:id").patch(expenseController.patch);

/*****************DELETE EXPENSES******************/
router.route("/:id").delete(expenseController.del);

module.exports = router;
