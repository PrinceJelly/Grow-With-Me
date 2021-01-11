import React, { useState, useEffect } from "react";
import axios from "axios";
import { getAllGoals } from "../../utils/Axios";
import Form from "../../resuable/Form";
import InputField from "../../resuable/InputField";
import Button from "../../resuable/Button";

const savingsAPI = "http://localhost:8080/savings";

export default function Savings() {
  const [passChecks, validateError] = useState(null);
  const [goalAPI, setGoals] = useState(null);

  useEffect(() => {
    getAllGoals().then((res) => setGoals(res));
  }, []);

  const postNewSavings = async (postSaved) => {
    try {
      return axios.post(savingsAPI, postSaved);
    } catch (err) {
      return console.log(err, "Cannot post Expenses");
    }
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
  const handleClickSubmit = (event) => {
    event.preventDefault();
    if (addCheck(event)) {
      const newEntry = {
        goalId: event.target.goalInput.value,
        saved: event.target.savedInput.value,
      };
      postNewSavings(newEntry);
    }
  };
  return (
    <section className="addNewEntry expense">
      <h1 className="expense__title">SAVINGS</h1>
      <Form handleSubmit={handleClickSubmit}>
        <select name="goalInput">
          {goalAPI &&
            goalAPI.map((options) => {
              return <option value={options.id}>{options.myGoal}</option>;
            })}
        </select>
        <InputField removeError={clearError} type="number" name="savedInput" />
        <Button>Submit</Button>
      </Form>
    </section>
  );
}
