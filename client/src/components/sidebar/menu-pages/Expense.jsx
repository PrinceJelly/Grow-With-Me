import { postNewExpenses } from "../../utils/Axios";
export default function Stats() {
  return (
    <section className="addNewEntry expense">
      <h1 className="expense__title">EXPENSE</h1>
      <form className="expense__form">
        <label className="expense__form--label">What are you adding?</label>
        <input
          className="expense__form--input"
          placeholder="Please enter the name of your expense"
        />
        <label className="expense__form--label">How much was it?</label>

        <input className="expense__form--input" type="number" placeholder="Please enter the amount" />
        <input className="expense__form--input__button" type="button" value="submit" />
      </form>
    </section>
  );
}
