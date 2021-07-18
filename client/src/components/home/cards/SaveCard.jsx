import { valueOptions } from "../../utils/Validation";
import ModalDeleteSaved from "../modal/DeleteSavings";
import React, { useState } from "react";
import Button from "../../resuable/Button";
import PlaceholderSaveExpenses from "../../resuable/placeholderSaveExpense";

export default function SaveCard({ saveItem, getData }) {
  const [showing, setShowing] = useState(false);
  const { saved, goals } = saveItem;

  const savedConverted = saved.toLocaleString("en-US", valueOptions);
  const goalsCoverted = goals.goal.toLocaleString("en-US", valueOptions);

  const handleClick = () => {
    setShowing(true);
  };

  return saveItem === null ? (
    <PlaceholderSaveExpenses />
  ) : (
    <li className="card__item">
      {showing ? (
        <ModalDeleteSaved getData={getData} setShowing={setShowing} savingsID={saveItem.id} />
      ) : (
        ""
      )}
      <span className="card__title__container">
        <p className="card__title__container--title">Saved</p>
        <p className="card__title__container--dollar">+{savedConverted}</p>
      </span>
      <span className="card__type__container">
        <p className="card__type__container--type">My Goal: {goals.myGoal}</p>
        <p className="card__type__container--type">{goalsCoverted}</p>
      </span>
      <p className="card__type__container--Contributions">
        Total Contributions: {goals.goalRemainder.toLocaleString("en-US", valueOptions)}
      </p>
      <Button addClass="modal__btn" handleClick={handleClick}>
        Delete
      </Button>
    </li>
  );
}
