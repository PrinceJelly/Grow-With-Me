import OnClickCalendar from "./CalendarCard";

export default function CalendarPopUp({ selectedValue, viewSavings, viewExpense }) {
  const DATE_OPTIONS = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  return (
    <section className="card-section__content">
      <span className="card-section__content__title">
        <p>{selectedValue.toLocaleDateString("en-CA", DATE_OPTIONS)}</p>
      </span>
      <OnClickCalendar saveData={viewSavings} expenseData={viewExpense} />
    </section>
  );
}
