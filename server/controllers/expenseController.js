const Expense = require("../models/expenseModel");
//I feel like I can use a controller but I'm unsure?
/****************GET ALL EXPENSES*********************/

function getExpense() {
  Expense.get((req, res) => {
  Expense.where(req.query).then((expense) => {
    res.status(200).json(expense);
  });
})

/*******************POST EXPENSES*********************/

/******************PATCH EXPENSES********************/

/****************DELETE EXPENSES********************/



/*****************CONTROLLER EXAMPLE ? ****************/

/* const Customer = bookshelf.model('Customer')

Customer.login(email, password).then((customer) => {
  res.json(customer)
}).catch(Customer.NotFoundError, () => {
  res.json(400, {error: email + ' not found'})
}).catch((error) => {
  console.error(error)
}) */

