import React, { useState } from "react";
import Button from "../resuable/Button";
export default function CalendarPopUp({ selectedValue, setShowing }) {
  const [isClass, addClass] = useState(false);
  const DATE_OPTIONS = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const DATE_OPTIONS_SHORT = { weekday: "short", year: "numeric", month: "short", day: "numeric" };

  return !selectedValue[0] ? (
    ""
  ) : (
    <section className={`date-alert modal ${addClass && "modal--isactive"}`}>
      <Button handleClick={() => setShowing(false)}>I AM BUTTON</Button>
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
/*******how to render the API with matching dates *******/

/*  A1. get Modal
    A2. how: by selecting a calendar date 
    A3. onClick terinary setShowing(true)
    A4. Show Modal
    A5. render the dates through props
    COJMPL

    1B. modal contains dates and call from API
    2B. If selected dates are TRUE => Then .map through the array from the DATABASE.
        if DATES are EQUAL to selectedDATES, then render the data.
        A rundown would be selected__DATES === DATE__DATABASE
*/
