import React, { useState } from "react";
import Savings from "./Savings";
import Expense from "./Expense";
import Pet from "./newPet";

export default function AddNewEntry() {
  const [newGoal, newGoalShowing] = useState(false);
  const [newSave, newSaveShowing] = useState(false);
  const [newExp, newExpShowing] = useState(false);

  const handleSelected = (event) => {
    if (event.target.value === "Add a new Goal") {
      newGoalShowing(true);
      newSaveShowing(false);
      newExpShowing(false);
    }
    if (event.target.value === "Add savings") {
      newGoalShowing(false);
      newSaveShowing(true);
      newExpShowing(false);
    }
    if (event.target.value === "Add expense") {
      newGoalShowing(false);
      newSaveShowing(false);
      newExpShowing(true);
    }
  };
  return (
    <section>
      <h1>Hello</h1>
      <form>
        <label>What would you like to add?</label>
        <select onChange={handleSelected}>
          <option value="Add a new Goal">Add a new goal</option>
          <option value="Add savings">Add savings</option>
          <option value="Add expense">Add expense</option>
        </select>
      </form>
      <section>
        {newGoal ? <Pet newPageShowing={newGoalShowing} /> : ""}
        {newSave ? <Savings newPageShowing={newSaveShowing} /> : ""}
        {newExp ? <Expense newPageShowing={newExpShowing} /> : ""}
      </section>
    </section>
  );
}
