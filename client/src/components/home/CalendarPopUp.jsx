import ExpenseCard from "./cards/ExpenseCard";
import SaveCard from "./cards/SaveCard";
import Button from "../resuable/Button";
import Icon from "../resuable/React-Svg-Library";
import React, { useState } from "react";

const Plus = <Icon addClass="icon" name="plus.svg" />;
const Minus = <Icon addClass="icon" name="minus.svg" />;
const DownArrow = <Icon addClass="icon" name="arrow-down.svg" />;

export default function CalendarCard({ viewExpense, viewSavings }) {
  const [showingSavings, setShowingSavings] = useState(false);
  const [showingExpenses, setShowingExpenses] = useState(false);
  //I wonder if this is even nescessary? The second state
  const getSavingsLength = viewSavings.length;
  const getExpenesLength = viewExpense.length;

  const handleShowing = (event) => {
    if (event.target.id === "showingSavings") {
      setShowingSavings(true);
      setShowingExpenses(false);
    }
    if (event.target.id === "showingExpenses") {
      setShowingExpenses(true);
      setShowingSavings(false);
    }
    if (event.target.id === "showingAll") {
      setShowingSavings(true);
      setShowingExpenses(true);
    }
  };

  return (
    <article className="card-section__content--main">
      <div className="card-section__button--container">
        <Button addClass="btn__card" id="showingSavings" handleClick={handleShowing}>
          {Plus}Savings
        </Button>
        <Button addClass="btn__card" id="showingExpenses" handleClick={handleShowing}>
          {Minus}Expenses
        </Button>
        <Button addClass="btn__card" id="showingAll" handleClick={handleShowing}>
          {DownArrow}View All
        </Button>
      </div>
      <section className="card-section__content--cards">
        <h1>My Entries for today : </h1>
        {showingSavings ? (
          <div className="card__container">
            <h1>{getSavingsLength} Posted</h1>
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
            <h1>{getExpenesLength} Posted</h1>
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
