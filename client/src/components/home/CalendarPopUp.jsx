import React, { useState } from "react";
import Button from "../resuable/Button";
import Icon from "../resuable/React-Svg-Library";
import OnClickCalendar from "./onClickCalendar";
export default function CalendarPopUp({ selectedValue, setShowing, expense, save, goals }) {
  const [isClass, addClass] = useState(true);

  const DATE_OPTIONS = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const DATE_OPTIONS_SHORT = { weekday: "short", year: "numeric", month: "short", day: "numeric" };
  return !selectedValue[0] ? (
    ""
  ) : (
    <main className="modal">
      <section className={`date-alert ${isClass && "modal--active"}`}>
        <div className="date-alert__btn--container">
          <Button addClass="btn__modal" handleClick={() => setShowing(false)}>
            <Icon addClass="minus-svg" name="cross.svg" />

            <span className={`close-animation ${isClass && "close-animation--active"}`}>
              <p className=" btn__modal--txt">Close</p>
            </span>
          </Button>
        </div>
        <div className="date-alert__date--container">
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
        </div>
        <OnClickCalendar expenseData={expense} saveData={save} goalsData={goals} />
      </section>
    </main>
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
