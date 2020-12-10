const express = require("express");

const expensesRoute = require("./routes/expenseRoute");
const savingsRoute = require("./routes/savingsRoute");
const goalRoute = require("./routes/goalsRoute");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/savings", expensesRoute);
app.use("/expenses", savingsRoute);
app.use("/goals", goalRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
