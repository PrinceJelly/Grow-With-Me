import React, { useState } from "react";
import axios from "axios";
import Form from "../../resuable/Form";
import InputField from "../../resuable/InputField";
import Button from "../../resuable/Button";

const expensesAPI = "http://localhost:8080/expenses";

export default function Expense() {
  const [passChecks, validateError] = useState(null);

  const postNewExpenses = async (postExpense) => {
    try {
      return axios.post(expensesAPI, postExpense);
    } catch (err) {
      return console.log(err, "Cannot post Expenses");
    }
  };
  const clearError = ({ target }) => {
    target.classList.remove("validationerror");
  };
  const addCheck = ({ target }) => {
    let passedChecks = false;

    if (!target.typeInput.value.trim()) {
      target.typeInput.parentElement.classList.toggle("validationerror");
      passedChecks = false;
    } else {
      passedChecks = true;
    }
    if (!target.spentInput.value.trim()) {
      target.spentInput.parentElement.classList.toggle("validationerror");
      passedChecks = false;
    } else {
      passedChecks = true;
    }
    validateError(passedChecks);

    return passedChecks;
  };
  const handleClickSubmit = (event) => {
    event.preventDefault();
    if (addCheck(event)) {
      const newEntry = {
        type: event.target.typeInput.value,
        spent: event.target.spentInput.value,
      };
      postNewExpenses(newEntry);
    }
    console.log("clicked");
  };
  return (
    <section className="addNewEntry expense">
      <h1 className="expense__title">EXPENSE</h1>
      <Form handleSubmit={handleClickSubmit}>
        <InputField removeError={clearError} type="text" name="typeInput" />
        <InputField removeError={clearError} type="number" name="spentInput" />
        <Button>Submit</Button>
      </Form>
    </section>
  );
}
