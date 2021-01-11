import ExpenseCard from "./cards/ExpenseCard";
import SaveCard from "./cards/SaveCard";
import Button from "../resuable/Button";
import Icon from "../resuable/React-Svg-Library";
import React, { useState } from "react";

const Plus = <Icon addClass="icon" name="plus.svg" />;
const Minus = <Icon addClass="icon" name="minus.svg" />;
const DownArrow = <Icon addClass="icon" name="arrow-down.svg" />;

export default function CalendarCard({ viewExpense, viewSavings, selectedValue, DATE_OPTIONS }) {
  const [showingSavings, setShowingSavings] = useState(false);
  const [showingExpenses, setShowingExpenses] = useState(false);
  //I wonder if this is even nescessary? The second state

  const getSavingsLength = viewSavings.length;
  const getExpensesLength = viewExpense.length;

  const handleShowing = (event) => {
    if (event.target.id === "showingSavings") {
      setShowingSavings(true);
      setShowingExpenses(false);
    }
    if (event.target.id === "showingExpenses") {
      setShowingExpenses(true);
      setShowingSavings(false);
    }
  };

  return (
    <article className="card-section__content">
      <span className="calendar__date">
        <h1>{selectedValue.toLocaleDateString("en-CA", DATE_OPTIONS)}</h1>
      </span>
      <div className="card-section__button--container">
        <Button addClass="btn__card" id="showingSavings" handleClick={handleShowing}>
          {Plus}Savings
        </Button>
        <Button addClass="btn__card" id="showingExpenses" handleClick={handleShowing}>
          {Minus}Expenses
        </Button>
      </div>
      <section className="card-section__cards">
        {showingSavings ? (
          <div className="card__container">
            <h1>My Entries for today : {getSavingsLength} Posted</h1>
            {viewSavings &&
              viewSavings.map((saveItem) => {
                return (
                  <div className="card">
                    <ul className="card__list" key={saveItem.id}>
                      <SaveCard key={saveItem.id} saveItem={saveItem} />
                    </ul>
                  </div>
                );
              })}
          </div>
        ) : (
          <div className="card__container">
            <h1>My Entries for today : {getExpensesLength} Posted</h1>
            {viewExpense &&
              viewExpense.map((expenseItem) => {
                return (
                  <div className="card">
                    <ul className="card__list" key={expenseItem.id}>
                      <ExpenseCard key={expenseItem.id} expenseItem={expenseItem} />
                    </ul>
                  </div>
                );
              })}
          </div>
        )}
      </section>
    </article>
  );
}
