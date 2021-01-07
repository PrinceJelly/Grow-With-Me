import ExpenseCard from "./cards/ExpenseCard";
import SaveCard from "./cards/SaveCard";
import Button from "../resuable/Button";
import Icon from "../resuable/React-Svg-Library";

export default function CalendarCard({ expenseData, saveData }) {
  const Plus = <Icon addClass="icon" name="plus.svg" />;
  const Minus = <Icon addClass="icon" name="minus.svg" />;
  const DownArrow = <Icon addClass="icon" name="arrow-down.svg" />;
  return (
    <article className="card-section__content--main">
      <Button addClass="btn__card">{Plus}Savings</Button>
      <Button addClass="btn__card">{Minus}Expenses</Button>
      <Button addClass="btn__card">{DownArrow}View All</Button>
      <section className="card-section__content--cards">
        <div className="card__container">
          <h1>Savings</h1>
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
          <h1>Expense</h1>
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
      </section>
    </article>
  );
}
