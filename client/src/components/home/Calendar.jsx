import Calendar from "react-calendar";
import React, { useState, useEffect } from "react";
import CalendarPopUp from "./CalendarPopUp";
import Icon from "../resuable/React-Svg-Library";
import { getAllData } from "../utils/Axios";

export default function Calender() {
  const [selectedValue, setSelectedValue] = useState(new Date(), []);
  const arrowRight = <Icon addClass="svg__arrow--right" name="arrow-right.svg" />;
  const arrowLeft = <Icon addClass="svg__arrow--left" name="arrow-left.svg" />;

  const [expense, setExpense] = useState([null]);
  const [save, setSave] = useState([null]);
  const [goal, setGoal] = useState([null]);
  useEffect(() => {
    getAllData().then((res) => {
      setGoal(res[0]);
      setSave(res[1]);
      setExpense(res[2]);
    });
  }, []);


  const [viewSavings, setViewSavings] = useState(false);
  const [viewExpense, setViewExpense] = useState(false);
  const [remainingAmount, setRemainingAmount] = useState(null);



  const onClickDay = (event) => {
    setViewSavings(
      save.filter((e) => new Date(Date.parse(e.date)).toDateString() === event.toDateString())
    );
    if (save.length > 0 ) { 
  const saveID = save.reduce((savedAmount, { goal_id, saved }) => {
    (savedAmount[goal_id] = savedAmount[goal_id] || []).push(saved);
    return savedAmount;
  }, []);
  console.log(saveID)
  console.log(save);
const savingsTotal = saveID.map((item => item.reduce((acc, val) => acc + val, 0)))
const getGoal = save.map((item) =>  {return item.goals.goal})
console.log(savingsTotal);
///perhaps i need another if statement?
// if goal_id  === goal_id then do this function? or ???
const goalRemainder = getGoal[3] - savingsTotal[3];
//this would hardcode it to be fixed on each array, although we want it to be dynamic
//back to the drawing boaaard ;n;
console.log(goalRemainder)
}
    setViewExpense(
      expense.filter((e) => new Date(Date.parse(e.date)).toDateString() === event.toDateString())
    );
  };
// console.log(save);
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
      <section className="card-section">
        <CalendarPopUp
          selectedValue={selectedValue}
          viewSavings={viewSavings}
          viewExpense={viewExpense}
          remainingAmount={remainingAmount}
        />
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
