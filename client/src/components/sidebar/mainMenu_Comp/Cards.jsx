import { Progress } from "semantic-ui-react";
import { valueOptions } from "../../utils/Validation";
import PlaceholderGoals from "../../resuable/placeholderGoals";
export default function Cards({ goalItem, getData }) {
  const { myGoal, goal, goalRemainder, savedToDate, img_url, myPet } = goalItem;
  console.log(goalItem);
  const goalDivision = (savedToDate / goal) * 100;
  const goalPercentage = goalDivision.toFixed(2);

  const options = goalRemainder.toLocaleString("en-US", valueOptions);
  console.log(goalPercentage);
  return goalItem === null ? (
    <PlaceholderGoals />
  ) : (
    <li className="main-menu__card-list__item">
      <h1 className="main-menu__card-list__goal">My Goal Towards: {myGoal}</h1>
      <div className="main-menu__card-list__col-container">
        <div className="main-menu__card-list__pet--img-container">
          <img className="main-menu__card-list__pet" src={img_url} alt={myPet} />
        </div>
        <div className="main-menu__card-list__col-container--info">
          <h5 className="main-menu__card-list__pet__pet-name">My Companion: {myPet}</h5>
          <span className="main-menu__card-list__label--container">
            <label className="main-menu__card-list__label">
              {options} Till you've reached your goal!
            </label>
            <Progress className="progress-bar" percent={goalPercentage} active progress />
          </span>
        </div>
      </div>
    </li>
  );
}
