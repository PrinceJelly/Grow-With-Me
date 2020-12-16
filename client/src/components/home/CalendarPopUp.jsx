export default function CalendarPopUp({ selectedValue }) {
  const DATE_OPTIONS = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const DATE_OPTIONS_SHORT = { weekday: "short", year: "numeric", month: "short", day: "numeric" };
  return !selectedValue[0] ? (
    ""
  ) : (
    <section className="date-alert">
      {selectedValue[0].getDate() === selectedValue[1].getDate() ? (
        <h2 className="date-alert__date">
          {selectedValue[0].toLocaleDateString("en-US", DATE_OPTIONS)}
        </h2>
      ) : (
        <h2 className="date-alert__date date-alert__date--selected-range">
          {selectedValue[0].toLocaleDateString("en-US", DATE_OPTIONS_SHORT)} {" - "}
          {selectedValue[1].toLocaleDateString("en-US", DATE_OPTIONS_SHORT)}
        </h2>
      )}
    </section>
  );
}
