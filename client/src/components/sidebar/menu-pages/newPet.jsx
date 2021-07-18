import React, { useState } from "react";
import axios from "axios";
import Form from "../../resuable/Form";
import InputField from "../../resuable/InputField";
import Button from "../../resuable/Button";

const goalAPI = "http://localhost:8080/goals";

export default function NewPet({ getData }) {
  const [passChecks, validateError] = useState(null);

  const postNewGoal = (postGoal) => {
    axios.post(goalAPI, postGoal).then(() => {
      getData();
    });
  };
  const clearError = ({ target }) => {
    target.classList.remove("validationerror");
  };
  const addCheck = ({ target }) => {
    let passedChecks = false;

    if (!target.myGoalInput.value.trim()) {
      target.myGoalInput.parentElement.classList.toggle("validationerror");
      passedChecks = false;
    } else {
      passedChecks = true;
    }
    if (!target.myPetInput.value.trim()) {
      target.myPetInput.parentElement.classList.toggle("validationerror");
      passedChecks = false;
    } else {
      passedChecks = true;
    }
    if (!target.goalInput.value.trim()) {
      target.goalInput.parentElement.classList.toggle("validationerror");
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
        myGoal: event.target.myGoalInput.value,
        myPet: event.target.myPetInput.value,
        goal: event.target.goalInput.value,
      };
      postNewGoal(newEntry);
    }
  };
  return (
    <section className="addNewEntry form">
      <h1 className="form__title">GOAL</h1>
      <Form handleSubmit={handleClickSubmit}>
        <label className="form__label">What would you like to add?</label>
        <InputField
          addClass="form__input"
          removeError={clearError}
          type="text"
          name="myGoalInput"
          placeholder="I would like to save towards..."
          required
        />
        <label className="form__label">What's your companions name?</label>
        <InputField
          addClass="form__input"
          removeError={clearError}
          type="text"
          name="myPetInput"
          placeholder="My companions name is..."
          required
        />
        <label className="form__label">How much do you want to save?</label>
        <InputField
          addClass="form__input"
          removeError={clearError}
          type="number"
          name="goalInput"
          min="1"
          placeholder="I would like to save..."
          required
        />
        <Button addClass="form__button">Submit</Button>
      </Form>
    </section>
  );
}
