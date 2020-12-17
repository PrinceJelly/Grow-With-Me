import Calendar from "react-calendar";
import React, { useState } from "react";
import CalendarPopUp from "./CalendarPopUp";
import Icon from "../resuable/React-Svg-Library";

export default function Calender() {
  const [showing, setShowing] = useState(false);
  const [selectedValue, setSelectedValue] = useState(new Date(), []);
  const arrowRight = <Icon addClass="svg__arrow--right" name="arrow-right.svg" />;
  const arrowLeft = <Icon addClass="svg__arrow--left" name="arrow-left.svg" />;

  const openModal = (event) => {
    setShowing(true);
  };

  return (
    /* around here there's a drop down menu for the date range component, it'll greatly change with scss*/
    <section className="calendar">
      <Calendar
        onClickDay={openModal}
        onChange={setSelectedValue}
        value={selectedValue}
        selectRange={true}
        maxDate={new Date()}
        minDate={new Date(2019, 11, 31)}
        next2Label={null}
        prev2Label={null}
        prevLabel={arrowLeft}
        nextLabel={arrowRight}
      />
      <div className="modal modal--container">
        {showing ? <CalendarPopUp selectedValue={selectedValue} setShowing={setShowing} /> : null}
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
