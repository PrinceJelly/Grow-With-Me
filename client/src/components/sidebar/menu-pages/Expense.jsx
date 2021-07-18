import React, { useState } from "react";
import axios from "axios";
import Form from "../../resuable/Form";
import InputField from "../../resuable/InputField";
import Button from "../../resuable/Button";

const expensesAPI = "http://localhost:8080/expenses";

export default function Expense({ getData }) {
  const [passChecks, validateError] = useState(null);

  const postNewExpenses = (postExpense) => {
    axios.post(expensesAPI, postExpense).then(() => {
      getData();
    });
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

  const [getDate, setDate] = useState("");
  function newDate() {
    const tdDates = new Date();
    let month = tdDates.getMonth() + 1;
    let day = tdDates.getDate();
    const year = tdDates.getFullYear();

    if (month < 10) {
      month = "0" + month.toString();
    }
    if (day < 10) {
      day = "0" + day.toString();
    }
    const getDate = year + "-" + month + "-" + day;
    const getDateToString = getDate.toString();

    return getDateToString;
  }

  const handleClickSubmit = (event) => {
    event.preventDefault();
    if (addCheck(event)) {
      const newEntry = {
        type: event.target.typeInput.value,
        spent: event.target.spentInput.value,
        date: event.target.todaysDate.value,
      };
      postNewExpenses(newEntry);
    }
  };
  return (
    <section className="addNewEntry form">
      <h1 className="form__title">EXPENSE</h1>
      <Form handleSubmit={handleClickSubmit}>
        <label className="form__label">What would you like to add?</label>
        <InputField
          addClass="form__input"
          removeError={clearError}
          type="text"
          name="typeInput"
          placeholder="I have made an expense towards..."
          required
        />
        <label className="form__label">How much was your purchase?</label>
        <InputField
          addClass="form__input"
          removeError={clearError}
          type="number"
          name="spentInput"
          placeholder="I have spent..."
          min="1"
          required
        />
        <label className="form__label">
          When did you make this purchase?
          <span className="form__label--span">Please enter a date:</span>
        </label>
        <input
          className="ui search selection dropdown form__date-range"
          name="todaysDate"
          type="date"
          min="2019-12-31"
          max={newDate()}
          onChange={(event) => setDate(event.target.value)}
          required
        />
        <Button addClass="form__button">Submit</Button>
      </Form>
    </section>
  );
}
