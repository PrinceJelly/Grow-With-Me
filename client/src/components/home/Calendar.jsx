import Calendar from "react-calendar";
import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";
import CalendarPopUp from "./CalendarPopUp";
import Icon from "../resuable/React-Svg-Library";

import { getAllData, getAllSavings } from "../utils/Axios";

export default function Calender() {
  let newDate = new Date();

  const [selectedValue, setSelectedValue] = useState(newDate, []);

  const [showing, setShowing] = useState(false);

  const [data, setData] = useState([null]);

  const [expense, setExpense] = useState(null);
  const [save, setSave] = useState(null);

  const arrowRight = <Icon addClass="svg__arrow--right" name="arrow-right.svg" />;
  const arrowLeft = <Icon addClass="svg__arrow--left" name="arrow-left.svg" />;

  useEffect(() => {
    getAllData().then((res) => {
      setSave(res[1]);
      setExpense(res[2]);
    });
  }, []);

  const openModal = (event) => {
    setShowing(true);
  };
  const onClickDay = (date) => {
    const getSaveDates = save.map((item) => {
      const d = item.date;
      const saveConverted = DateTime.fromISO(d).toLocaleString();
      return { ...item, date: saveConverted };
    });
    const getExpenseDate = expense.map((item) => {
      const d = item.date;
      const expenseConverted = DateTime.fromISO(d).toLocaleString();
      return { ...item, date: expenseConverted };
    });
    setData([getExpenseDate, getSaveDates]);
    //now I need to filter this as if it's a search result?
  };
  console.log(data);

  return (
    <section className="calendar">
      <Calendar
        onClickDay={() => {
          onClickDay();
          openModal();
        }}
        minDetail={"decade"}
        calendarType={"US"}
        locale={"en-US"}
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
      <div className="modal--container">
        {showing ? (
          <CalendarPopUp
            selectedValue={selectedValue}
            setShowing={setShowing}
            save={save}
            expense={expense}
          />
        ) : null}
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
