const express = require("express");
const cors = require("cors");

const expensesRoute = require("./routes/expenseRoute");
const savingsRoute = require("./routes/savingsRoute");
const goalRoute = require("./routes/goalsRoute");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/savings", savingsRoute);
app.use("/goals", goalRoute);
app.use("/expenses", expensesRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
