import React, { useState } from "react";
import Savings from "./Savings";
import Expense from "./Expense";
import Pet from "./newPet";

export default function AddNewEntry() {
  const [newGoal, newGoalShowing] = useState(false);
  const [newSave, newSaveShowing] = useState(false);
  const [newExp, newExpShowing] = useState(false);

  const handleSelected = (event) => {
    if (event.target.value === "Add A New Goal") {
      newGoalShowing(true);
      newSaveShowing(false);
      newExpShowing(false);
    }
    if (event.target.value === "Add Savings") {
      newGoalShowing(false);
      newSaveShowing(true);
      newExpShowing(false);
    }
    if (event.target.value === "Add Expense") {
      newGoalShowing(false);
      newSaveShowing(false);
      newExpShowing(true);
    }
  };
  return (
    <section className="newPage addNewEntry">
      <h1 className="addNewEntry__title">ADD NEW ENTRY</h1>
      <form className="addNewEntry__form__selection--container">
        <label className="addNewEntry__form__label">What would you like to add?</label>
        <select
          className="ui search selection dropdown addNewEntry__form__selection"
          onChange={handleSelected}
        >
          <option value="Please select an option">Please select an option</option>
          <option value="Add A New Goal">Add A New Goal</option>
          <option value="Add Savings">Add Savings</option>
          <option value="Add Expense">Add Expense</option>
        </select>
      </form>
      <section className="addNewEntry__page--container">
        {newGoal ? <Pet newPageShowing={newGoalShowing} /> : ""}
        {newSave ? <Savings newPageShowing={newSaveShowing} /> : ""}
        {newExp ? <Expense newPageShowing={newExpShowing} /> : ""}
      </section>
    </section>
  );
}
