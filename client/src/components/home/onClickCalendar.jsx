import ExpenseCard from "./cards/ExpenseCard";
import SaveCard from "./cards/SaveCard";
import Button from "../resuable/Button";
import Icon from "../resuable/React-Svg-Library";

import Slider from "react-slick";

export default function CalendarCard({ expenseData, saveData }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <main>
      <div className="card__container">
        <Slider className="card__slider" {...settings}>
          {expenseData &&
            expenseData.map((expenseItem) => {
              return (
                <div className="card">
                  <ul className="card__list">
                    <ExpenseCard key={expenseItem.id} expenseItem={expenseItem} />
                  </ul>
                </div>
              );
            })}
          {saveData &&
            saveData.map((saveItem) => {
              return (
                <div className="card">
                  <ul className="card__list">
                    <SaveCard key={saveItem.id} saveItem={saveItem} />
                  </ul>
                </div>
              );
            })}
        </Slider>
      </div>
    </main>
  );
}
