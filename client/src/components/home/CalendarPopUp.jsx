export default function CalendarPopUp({ selectedValue }) {
  return !selectedValue[0] ? (
    ""
  ) : (
    <section>
      {selectedValue[0].getDate() === selectedValue[1].getDate() ? (
        <h2>{selectedValue[0].toLocaleDateString()}</h2>
      ) : (
        <h2>
          {selectedValue[0].toLocaleDateString()} {" - "}
          {selectedValue[1].toLocaleDateString()}
        </h2>
      )}
    </section>
  );
}
