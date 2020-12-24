import Calendar from "react-calendar";
import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";
import CalendarPopUp from "./CalendarPopUp";
import Icon from "../resuable/React-Svg-Library";

import { getAllData, getAllSavings } from "../utils/Axios";
import { formatDate } from "react-calendar/src/shared/dateFormatter";

export default function Calender() {
  const [selectedValue, setSelectedValue] = useState(new Date(), []);

  const arrowRight = <Icon addClass="svg__arrow--right" name="arrow-right.svg" />;
  const arrowLeft = <Icon addClass="svg__arrow--left" name="arrow-left.svg" />;

  const [data, setData] = useState([null]);
  const [expense, setExpense] = useState(null);
  const [save, setSave] = useState(null);

  useEffect(() => {
    getAllData().then((res) => {
      setSave(res[1]);
      setExpense(res[2]);
    });
  }, []);

  const [showing, setShowing] = useState(false);
  const [viewing, setViewing] = useState(false);
  const onClickDay = (event) => {
    setShowing(
      save.filter((e) => new Date(Date.parse(e.date)).toDateString() === event.toDateString())
    );
    setViewing(
      expense.filter((e) => new Date(Date.parse(e.date)).toDateString() === event.toDateString())
    );
  };

  return (
    <section className="calendar">
      <Calendar
        onClickDay={(event) => {
          onClickDay(event);
        }}
        minDetail={"decade"}
        calendarType={"US"}
        locale={"en-CA"}
        onChange={setSelectedValue}
        value={selectedValue}
        maxDate={new Date()}
        minDate={new Date(2019, 11, 31)}
        next2Label={null}
        prev2Label={null}
        prevLabel={arrowLeft}
        nextLabel={arrowRight}
      />
      <div className="modal--container">
        {showing &&
          showing.map((item) => {
            return (
              <ul key={item.id}>
                <li>
                  <p>{item.saved}</p>
                  <p>{DateTime.fromISO(item.date).toLocaleString()}</p>
                </li>
              </ul>
            );
          })}
        {viewing &&
          viewing.map((item) => {
            return (
              <ul key={item.id}>
                <li>
                  <p>{item.type}</p>
                  <p>{item.spent}</p>
                  <p>{DateTime.fromISO(item.date).toLocaleString()}</p>
                </li>
              </ul>
            );
          })}
        {/* {showing ? (
          <CalendarPopUp selectedValue={selectedValue} setShowing={setShowing} save={save} />
        ) : null} */}
      </div>
    </section>
  );
}
//add styling for the hover effect when choosing date range
//with an onclick handler function to change the state of the menu bar
//onClick function will open the menu and view the weeks stats, selecting the day will then render the day, or week, or month
//the main component will be the month page

//there is 3 onclick events when selecting a range will render the week, when selecting a day will render the day of, and selecting the month will render the month

//stats are only available for month, yearly and weekly.

//this project will mainly consist of conditional rendering
