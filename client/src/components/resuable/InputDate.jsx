export default function InputDate() {
  function newDate() {
    const tdDates = new Date();
    let month = tdDates.getMonth() + 1;
    let day = tdDates.getDate();
    const year = tdDates.getFullYear();

    if (month < 10) {
      month = "0" + month.toString();
    }
    if (day < 10) {
      day = "0" + day.toString();
    }
    const getDate = year + "-" + month + "-" + day;
    const getDateToString = getDate.toString();

    return getDateToString;
  }

  return <input id="todaysDate" name="todaysDate" type="date" min="2019-12-31" max={newDate()} />;
}
