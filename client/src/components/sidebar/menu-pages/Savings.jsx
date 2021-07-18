import React, { useState, useEffect } from "react";
import axios from "axios";
import { getAllGoals } from "../../utils/Axios";
import Form from "../../resuable/Form";
import InputField from "../../resuable/InputField";
import Button from "../../resuable/Button";

const savingsAPI = "http://localhost:8080/savings";

export default function Savings({ getData }) {
  const [passChecks, validateError] = useState(null);
  const [goalAPI, setGoals] = useState(null);

  useEffect(() => {
    getAllGoals().then((res) => setGoals(res));
  }, []);

  const postNewSavings = (postSaved) => {
    axios.post(savingsAPI, postSaved).then(() => {
      getData();
    });
  };
  const clearError = ({ target }) => {
    target.classList.remove("validationerror");
  };
  const addCheck = ({ target }) => {
    let passedChecks = false;

    if (!target.goalInput.value.trim()) {
      target.goalInput.parentElement.classList.toggle("validationerror");
      passedChecks = false;
    } else {
      passedChecks = true;
    }
    if (!target.savedInput.value.trim()) {
      target.savedInput.parentElement.classList.toggle("validationerror");
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
        goalId: event.target.goalInput.value,
        saved: event.target.savedInput.value,
        date: event.target.todaysDate.value,
      };
      postNewSavings(newEntry);
    }
  };

  return (
    <section className="addNewEntry form">
      <h1 className="form__title">SAVINGS</h1>
      <Form handleSubmit={handleClickSubmit}>
        <label className="form__label ">Which goal did you contribute to?</label>
        <select name="goalInput" className="ui search selection dropdown form__dropdown">
          {goalAPI &&
            goalAPI.map((options) => {
              return <option value={options.id}>{options.myGoal}</option>;
            })}
        </select>
        <label className="form__label">How much did you save?</label>
        <InputField
          addClass="form__input"
          removeError={clearError}
          type="number"
          name="savedInput"
          min="1"
          placeholder="I have saved..."
          required
        />
        <label className="form__label">
          When did you save? <span className="form__label--span">Please enter a date:</span>
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
