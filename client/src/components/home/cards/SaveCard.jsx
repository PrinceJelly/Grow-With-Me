import { DateTime } from "luxon";

export default function SaveCard({ saveItem, remainingAmount }) {
  const { saved, goals, date } = saveItem;

const remainderAmount = goals.goal - saved; 

  return (
    <li className="card__item">
      <span className="card__date__container">
        <p className="card__date">{DateTime.fromISO(date).toLocaleString()}</p>
      </span>
      <span className="card__title__container">
        <p className="card__title__container--title">Savings</p>
        <p className="card__title__container--dollar">+${saved}.00</p>
      </span>
      <span className="card__type__container">
        <p className="card__type__container--type">My Goal: {goals.myGoal}</p>
        <p className="card__type__container--type">${goals.goal}.00</p>
        <p className="card__type__container--type"> remainder :{remainderAmount}</p>
      </span>
    </li>
  );
}
