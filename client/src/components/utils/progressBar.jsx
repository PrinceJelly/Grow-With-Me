import React from "react";
import { Progress } from "semantic-ui-react";

const ProgressExampleActive = () => (
  <Progress className="progress-bar" percent={60} size="medium" active progress>
    <p className="progress-bar__label">60% Till you've reached your goal!</p>
  </Progress>
);

export default ProgressExampleActive;
