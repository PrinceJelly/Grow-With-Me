import { Progress } from "semantic-ui-react";

export default function Cards({ goalData }) {
  const { myGoal, goal, goalRemainder, savedToDate, img_url, myPet } = goalData;

  const goalDivision = (savedToDate / goal) * 100;
  const goalPercentage = goalDivision.toFixed(2);

  return (
    <li>
      <h1>{myGoal}</h1>
      <img src={img_url} />
      <h5>{myPet}</h5>
      <Progress className="progress-bar" percent={goalPercentage} size="medium" active progress>
        <label>{goalRemainder} Till you've reached your goal!</label>
      </Progress>
    </li>
  );
}
