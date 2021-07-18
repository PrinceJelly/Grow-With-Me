import React, { useState } from "react";
import { valueOptions } from "../../utils/Validation";
import Button from "../../resuable/Button";
import ModalDeleteExpense from "../modal/DeleteExpense";
import PlaceholderSaveExpenses from "../../resuable/placeholderSaveExpense";

export default function ExpenseCard({ expenseItem, getData }) {
  const [showing, setShowing] = useState(false);
  const { spent, type } = expenseItem;

  const spentConverted = spent.toLocaleString("en-US", valueOptions);
  const handleClick = () => {
    setShowing(true);
  };

  return expenseItem === null ? (
    <PlaceholderSaveExpenses />
  ) : (
    <li className="card__item">
      {showing ? (
        <ModalDeleteExpense getData={getData} setShowing={setShowing} expenseID={expenseItem.id} />
      ) : (
        ""
      )}
      <span className="card__title__container">
        <p className="card__title__container--title">Spent</p>
        <p className="card__title__container--dollar">- {spentConverted}</p>
      </span>
      <span className="card__type__container">
        <p className="card__type__container--type">{type}</p>
      </span>
      <Button addClass="modal__btn" handleClick={handleClick}>
        Delete
      </Button>
    </li>
  );
}
