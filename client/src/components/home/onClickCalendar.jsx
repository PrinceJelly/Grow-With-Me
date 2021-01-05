import ExpenseCard from "./cards/ExpenseCard";
import SaveCard from "./cards/SaveCard";
import Button from "../resuable/Button";
import Icon from "../resuable/React-Svg-Library";
import { useState, useEffect } from "react";

export default function CalendarCard({ expenseData, saveData}) {
console.log(remainingAmount);

  return (
    <article className="card__content">
      <div className="card__container--1">
        {saveData &&
          saveData.map((saveItem) => {
            return (
              <div className="card">
                <ul className="card__list" key={saveItem.id}>
                  <SaveCard key={saveItem.id} saveItem={saveItem} />
                </ul>
              </div>
            );
          })}
      </div>
      <div className="card__container">
        {expenseData &&
          expenseData.map((expenseItem) => {
            return (
              <div className="card">
                <ul className="card__list" key={expenseItem.id}>
                  <ExpenseCard key={expenseItem.id} expenseItem={expenseItem} />
                </ul>
              </div>
            );
          })}
      </div>
    </article>
  );
}
