import { DateTime } from "luxon";
import { valueOptions } from "../../utils/Validation";
export default function SaveCard({ saveItem }) {
  const { saved, goals, date, savingsUpdate } = saveItem;

  return (
    <li className="card__item">
      <span className="card__date__container">
        <p className="card__date">{DateTime.fromISO(date).toLocaleString()}</p>
      </span>
      <span className="card__title__container">
        <p className="card__title__container--title">Savings</p>
        <p className="card__title__container--dollar">
          +{saved.toLocaleString("en-US", valueOptions)}
        </p>
      </span>
      <span className="card__type__container">
        <p className="card__type__container--type">My Goal: {goals.myGoal}</p>
        <p className="card__type__container--type">
          {goals.goal.toLocaleString("en-US", valueOptions)}
        </p>
        <p className="card__type__container--type">
          Total Contributions: {goals.goalRemainder.toLocaleString("en-US", valueOptions)}
        </p>
      </span>
    </li>
  );
}
