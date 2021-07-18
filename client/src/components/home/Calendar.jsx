// import Calendar from "react-calendar";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import CalendarPopUp from "./CalendarPopUp";
import Icon from "../resuable/React-Svg-Library";
import { DATE_OPTIONS } from "../utils/Validation";
import PlaceholderSaveExpenses from "../resuable/placeholderSaveExpense";

const arrowRight = <Icon addClass="svg__arrow--right" name="arrow-right.svg" />;
const arrowLeft = <Icon addClass="svg__arrow--left" name="arrow-left.svg" />;

export default function Calender({ save, expense, getData }) {
  const [selectedValue, setSelectedValue] = useState(new Date());

  const [viewSavings, setViewSavings] = useState(false);
  const [viewExpense, setViewExpense] = useState(false);

  useEffect(() => {
    if (save !== null && save.length > 0) {
      setViewSavings(
        save.filter(
          (e) => new Date(Date.parse(e.date)).toDateString() === selectedValue.toDateString()
        )
      );
    }
    if (expense !== null && expense.length > 0) {
      setViewExpense(
        expense.filter(
          (e) => new Date(Date.parse(e.date)).toDateString() === selectedValue.toDateString()
        )
      );
    }
  }, [save, expense, selectedValue]);

  return (
    <section className="calendar">
      <div className="calendar__container">
        <Calendar
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
      </div>
      <section className="card-section">
        {
          (save,
          expense === null ? (
            <PlaceholderSaveExpenses />
          ) : (
            <CalendarPopUp
              selectedValue={selectedValue}
              viewSavings={viewSavings}
              viewExpense={viewExpense}
              getData={getData}
              DATE_OPTIONS={DATE_OPTIONS}
            />
          ))
        }
      </section>
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
