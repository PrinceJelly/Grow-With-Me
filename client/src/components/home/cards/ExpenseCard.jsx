import { DateTime } from "luxon";
import { valueOptions } from "../../utils/Validation";

export default function ExpenseCard({ expenseItem }) {
  const { spent, type, date } = expenseItem;

  return (
    <li className="card__item">
      <span className="card__title__container">
        <p className="card__title__container--title">Spent</p>
        <p className="card__title__container--dollar">
          - {spent.toLocaleString("en-US", valueOptions)}
        </p>
      </span>
      <span className="card__type__container">
        <p className="card__type__container--type">{type}</p>
      </span>
    </li>
  );
}
