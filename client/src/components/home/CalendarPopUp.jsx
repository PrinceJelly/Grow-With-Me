import ExpenseCard from "./cards/ExpenseCard";
import SaveCard from "./cards/SaveCard";
import Button from "../resuable/Button";
import Icon from "../resuable/React-Svg-Library";
import React, { useState } from "react";
const Plus = <Icon addClass="icon" name="plus.svg" />;
const Minus = <Icon addClass="icon" name="minus.svg" />;

export default function CalendarCard({
  viewExpense,
  viewSavings,
  selectedValue,
  DATE_OPTIONS,
  getData,
}) {
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
        <h1 className="calendar__date-picked">
          {selectedValue.toLocaleDateString("en-CA", DATE_OPTIONS)}
        </h1>
      </span>
      <div className="card-section__button--container">
        <Button addClass="btn__card" id="showingSavings" handleClick={handleShowing}>
          {Plus}
          <p className="btn__card--text">Savings</p>
        </Button>
        <Button addClass="btn__card" id="showingExpenses" handleClick={handleShowing}>
          {Minus}
          <p className="btn__card--text">Expenses</p>
        </Button>
      </div>
      <section className="card-section__cards">
        {showingSavings ? (
          <div className="card__container">
            <h1 className="card__entries">My Entries for today : {getSavingsLength} Posted</h1>
            {viewSavings &&
              viewSavings.map((saveItem) => {
                return (
                  <div className="card" key={saveItem.id}>
                    <ul className="card__list">
                      <SaveCard saveItem={saveItem} getData={getData} />
                    </ul>
                  </div>
                );
              })}
          </div>
        ) : (
          <div className="card__container">
            <h1 className="card__entries">My Entries for today : {getExpensesLength} Posted</h1>
            {viewExpense &&
              viewExpense.map((expenseItem) => {
                return (
                  <div className="card" key={expenseItem.id}>
                    <ul className="card__list">
                      <ExpenseCard expenseItem={expenseItem} getData={getData} />
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
